
import { StreamChat } from 'stream-chat';
import { auth } from './firebase';

// Mantenha aqui sua API Key pública do Stream
const STREAM_API_KEY = 'sm4nkh5qxnnh';

// Endereço do backend no Render
const API_URL = 'https://apibryan-api.onrender.com';

// Criar cliente do Stream
export const streamClient = StreamChat.getInstance(
  STREAM_API_KEY
);

// Conectar usuário autenticado
export async function conectarUsuarioStream(usuario) {
  if (!usuario || !usuario.uid) {
    throw new Error('Usuário não autenticado.');
  }

  const buscarToken = async () => {
    const usuarioFirebase = auth.currentUser;

    if (!usuarioFirebase) {
      throw new Error('Faça login primeiro.');
    }

    const firebaseToken = await usuarioFirebase.getIdToken();

    const resposta = await fetch(`${API_URL}/stream/token`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${firebaseToken}`,
        'Content-Type': 'application/json',
      },
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(
        dados.error || 'Erro ao buscar token do chat.'
      );
    }

    return dados.token;
  };

  await streamClient.connectUser(
    {
      id: usuario.uid,
      name: usuario.displayName || usuario.email || 'Usuário',
    },
    buscarToken
  );

  return streamClient;
}

// Desconectar usuário
export async function desconectarUsuarioStream() {
  if (streamClient.userID) {
    await streamClient.disconnectUser();
  }
}
