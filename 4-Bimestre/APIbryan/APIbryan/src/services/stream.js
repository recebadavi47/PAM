
import { StreamChat } from 'stream-chat';

// Coloque aqui a API Key pública da sua aplicação Stream
const STREAM_API_KEY = 'sm4nkh5qxnnh';

// Criar cliente do Stream
export const streamClient = StreamChat.getInstance(
  STREAM_API_KEY
);

// Conectar usuário autenticado pelo Firebase
export async function conectarUsuarioStream(
  usuario,
  buscarToken
) {
  if (!usuario || !usuario.uid) {
    throw new Error('Usuário não autenticado.');
  }

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
  if (streamClient.userId) {
    await streamClient.disconnectUser();
  }
}
