import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { estilos } from "./estilos";

export default function HomeScreen() {
  const [usuario, setUsuario] = useState(null);

  // Busca no Firestore os dados do usuário logado
  useEffect(() => {
    async function carregar() {
      const snap = await getDoc(doc(db, "usuarios", auth.currentUser.uid));
      setUsuario(snap.exists() ? snap.data() : { nome: "Usuário", email: auth.currentUser.email });
    }
    carregar();
  }, []);

  if (!usuario) {
    return (
      <View style={estilos.tela}>
        <ActivityIndicator size="large" color="#6366F1" />
      </View>
    );
  }

  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Olá, {usuario.nome}! 🎉</Text>
      <Text style={estilos.subtitulo}>Você está logado como {usuario.email}</Text>

      <TouchableOpacity style={estilos.botao} onPress={() => signOut(auth)}>
        <Text style={estilos.textoBotao}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
