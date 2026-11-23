import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import {
  OverlayProvider,
  Chat,
  Channel,
  ChannelList,
  MessageList,
  MessageInput,
} from 'stream-chat-expo';

import { streamClient, desconectarUsuarioStream } from '../services/stream';

export default function TelaChat() {
  const router = useRouter();
  const [canalSelecionado, setCanalSelecionado] = useState(null);

  const filtros = {
    type: 'messaging',
    members: { $in: [streamClient.userID] },
  };

  async function sair() {
    try {
      await desconectarUsuarioStream();
      router.replace('/login');
    } catch (erro) {
      console.log('Erro ao sair:', erro);
    }
  }

  return (
    <OverlayProvider>
      <Chat client={streamClient}>
        <View style={styles.container}>
          {canalSelecionado ? (
            <>
              <View style={styles.topo}>
                <TouchableOpacity onPress={() => setCanalSelecionado(null)}>
                  <Text style={styles.voltar}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>Conversa</Text>
              </View>
              <Channel channel={canalSelecionado}>
                <MessageList />
                <MessageInput />
              </Channel>
            </>
          ) : (
            <>
              <View style={styles.topo}>
                <Text style={styles.titulo}>APIbryan Chat</Text>
                <TouchableOpacity onPress={sair}>
                  <Text style={styles.sair}>Sair</Text>
                </TouchableOpacity>
              </View>
              <ChannelList
                filters={filtros}
                sort={{ last_message_at: -1 }}
                onSelect={setCanalSelecionado}
              />
            </>
          )}
        </View>
      </Chat>
    </OverlayProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topo: { height: 60, paddingHorizontal: 20, backgroundColor: '#2563eb', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  titulo: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  voltar: { color: '#fff', fontSize: 16 },
  sair: { color: '#fff', fontSize: 16 },
});
