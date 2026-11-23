import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { cores, estilos, traduzErro } from "./estilos";

export default function EditarPerfilScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  const email = auth.currentUser.email;

  // Busca o nome atual no Firestore para já aparecer preenchido
  useEffect(() => {
    async function carregar() {
      try {
        const snap = await getDoc(doc(db, "usuarios", auth.currentUser.uid));
        setNome(snap.exists() ? snap.data().nome || "" : "");
      } catch (e) {
        setErro("Não foi possível carregar seus dados.");
      }
      setCarregando(false);
    }
    carregar();
  }, []);

  async function salvar() {
    setErro("");
    setSucesso("");

    if (!nome.trim()) {
      setErro("Digite o seu nome.");
      return;
    }
    if (novaSenha && !senhaAtual) {
      setErro("Digite a senha atual para trocar a senha.");
      return;
    }

    setSalvando(true);
    try {
      const usuario = auth.currentUser;

      // 1) Troca de senha primeiro (é a parte que pode falhar por segurança).
      //    O Firebase exige confirmar a senha atual antes.
      if (novaSenha) {
        const credencial = EmailAuthProvider.credential(email, senhaAtual);
        await reauthenticateWithCredential(usuario, credencial);
        await updatePassword(usuario, novaSenha);
      }

      // 2) Atualiza o nome no Firestore (merge: não apaga email/criadoEm)
      await setDoc(
        doc(db, "usuarios", usuario.uid),
        { nome: nome.trim(), atualizadoEm: serverTimestamp() },
        { merge: true }
      );

      // 3) Mantém o nome também no perfil do Authentication
      await updateProfile(usuario, { displayName: nome.trim() });

      setSenhaAtual("");
      setNovaSenha("");
      setSucesso("Dados salvos com sucesso!");
    } catch (e) {
      setErro(traduzErro(e.code));
    }
    setSalvando(false);
  }

  if (carregando) {
    return (
      <View style={estilos.tela}>
        <ActivityIndicator size="large" color={cores.destaque} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: cores.fundo }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 24 }}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={estilos.titulo}>Editar informações</Text>
        <Text style={estilos.subtitulo}>Atualize os seus dados</Text>

        <Text style={estilos.rotulo}>Nome</Text>
        <TextInput
          style={estilos.input}
          placeholder="Nome"
          placeholderTextColor="#64748B"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={estilos.rotulo}>E-mail</Text>
        <TextInput
          style={[estilos.input, { opacity: 0.5 }]}
          value={email}
          editable={false}
        />

        <Text style={[estilos.rotulo, { marginTop: 12 }]}>Trocar senha (opcional)</Text>
        <TextInput
          style={estilos.input}
          placeholder="Senha atual"
          placeholderTextColor="#64748B"
          secureTextEntry
          value={senhaAtual}
          onChangeText={setSenhaAtual}
        />
        <TextInput
          style={estilos.input}
          placeholder="Nova senha (mínimo 6 caracteres)"
          placeholderTextColor="#64748B"
          secureTextEntry
          value={novaSenha}
          onChangeText={setNovaSenha}
        />

        {erro ? <Text style={estilos.erro}>{erro}</Text> : null}
        {sucesso ? <Text style={estilos.sucesso}>{sucesso}</Text> : null}

        <TouchableOpacity style={estilos.botao} onPress={salvar} disabled={salvando}>
          {salvando ? <ActivityIndicator color="#fff" /> : <Text style={estilos.textoBotao}>Salvar</Text>}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={estilos.link}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
