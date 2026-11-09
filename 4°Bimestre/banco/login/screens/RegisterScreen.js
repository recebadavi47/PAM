import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { estilos, traduzErro } from "../estilos";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function cadastrar() {
    if (!nome.trim()) {
      setErro("Digite o seu nome.");
      return;
    }
    setErro("");
    setCarregando(true);
    try {
      // 1) cria o usuário no Authentication
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), senha);

      // 2) salva os dados dele no banco (Firestore), na coleção "usuarios"
      await setDoc(doc(db, "usuarios", cred.user.uid), {
        nome: nome.trim(),
        email: email.trim(),
        criadoEm: serverTimestamp(),
      });
    } catch (e) {
      setErro(traduzErro(e.code));
    }
    setCarregando(false);
  }

  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Criar conta</Text>
      <Text style={estilos.subtitulo}>Preencha os dados abaixo</Text>

      <TextInput
        style={estilos.input}
        placeholder="Nome"
        placeholderTextColor="#64748B"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={estilos.input}
        placeholder="E-mail"
        placeholderTextColor="#64748B"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={estilos.input}
        placeholder="Senha (mínimo 6 caracteres)"
        placeholderTextColor="#64748B"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {erro ? <Text style={estilos.erro}>{erro}</Text> : null}

      <TouchableOpacity style={estilos.botao} onPress={cadastrar} disabled={carregando}>
        {carregando ? <ActivityIndicator color="#fff" /> : <Text style={estilos.textoBotao}>Cadastrar</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={estilos.link}>Já tem conta? Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
