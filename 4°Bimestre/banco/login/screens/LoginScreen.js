import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { estilos, traduzErro } from "../estilos";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function entrar() {
    setErro("");
    setCarregando(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), senha);
      // Não precisa navegar: o App.js percebe o login e troca para a Home
    } catch (e) {
      setErro(traduzErro(e.code));
    }
    setCarregando(false);
  }

  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Bem-vindo 👋</Text>
      <Text style={estilos.subtitulo}>Entre com a sua conta</Text>

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
        placeholder="Senha"
        placeholderTextColor="#64748B"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {erro ? <Text style={estilos.erro}>{erro}</Text> : null}

      <TouchableOpacity style={estilos.botao} onPress={entrar} disabled={carregando}>
        {carregando ? <ActivityIndicator color="#fff" /> : <Text style={estilos.textoBotao}>Entrar</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={estilos.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
