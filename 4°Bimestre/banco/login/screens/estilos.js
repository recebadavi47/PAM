import { StyleSheet } from "react-native";

export const cores = {
  fundo: "#0F172A",
  card: "#1E293B",
  texto: "#F8FAFC",
  suave: "#94A3B8",
  destaque: "#6366F1",
  erro: "#F87171",
};

export const estilos = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo, justifyContent: "center", padding: 24 },
  titulo: { fontSize: 30, fontWeight: "bold", color: cores.texto, marginBottom: 6 },
  subtitulo: { fontSize: 15, color: cores.suave, marginBottom: 28 },
  input: {
    backgroundColor: cores.card,
    color: cores.texto,
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
  },
  botao: {
    backgroundColor: cores.destaque,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginTop: 8,
  },
  textoBotao: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  link: { color: cores.destaque, textAlign: "center", marginTop: 20, fontSize: 15 },
  erro: { color: cores.erro, marginBottom: 8 },
});

// Traduz os erros do Firebase para algo que o usuário entenda
export function traduzErro(codigo) {
  const erros = {
    "auth/invalid-email": "E-mail inválido.",
    "auth/missing-password": "Digite a senha.",
    "auth/invalid-credential": "E-mail ou senha incorretos.",
    "auth/user-not-found": "Usuário não encontrado.",
    "auth/wrong-password": "Senha incorreta.",
    "auth/email-already-in-use": "Esse e-mail já está cadastrado.",
    "auth/weak-password": "A senha precisa ter pelo menos 6 caracteres.",
    "auth/network-request-failed": "Sem conexão com a internet.",
    "auth/too-many-requests": "Muitas tentativas. Tente de novo mais tarde.",
  };
  return erros[codigo] || "Algo deu errado. Tente novamente.";
}
