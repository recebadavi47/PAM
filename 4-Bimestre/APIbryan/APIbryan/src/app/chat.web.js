import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { streamClient, desconectarUsuarioStream } from '../services/stream';

const styles = {
  page: { minHeight: '100vh', background: '#eef2ff', padding: 24, boxSizing: 'border-box', fontFamily: 'Arial, sans-serif' },
  shell: { maxWidth: 1100, height: 'calc(100vh - 48px)', minHeight: 520, margin: '0 auto', display: 'flex', background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 12px 35px rgba(15,23,42,.12)' },
  sidebar: { width: 320, borderRight: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', minWidth: 0 },
  header: { background: '#2563eb', color: '#fff', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  title: { margin: 0, fontSize: 20 },
  logout: { background: 'transparent', border: '1px solid rgba(255,255,255,.7)', color: '#fff', borderRadius: 8, padding: '7px 10px', cursor: 'pointer' },
  list: { overflowY: 'auto', flex: 1 },
  channelButton: { width: '100%', padding: 16, border: 0, borderBottom: '1px solid #f1f5f9', background: '#fff', textAlign: 'left', cursor: 'pointer' },
  activeChannel: { background: '#eff6ff' },
  channelName: { fontWeight: 700, color: '#0f172a', marginBottom: 5 },
  preview: { color: '#64748b', fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
  conversation: { flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' },
  conversationHeader: { padding: '18px 22px', borderBottom: '1px solid #e5e7eb', fontWeight: 700, color: '#0f172a' },
  messages: { flex: 1, overflowY: 'auto', padding: 22, display: 'flex', flexDirection: 'column', gap: 12, background: '#f8fafc' },
  bubble: { maxWidth: '75%', padding: '10px 14px', borderRadius: 14, background: '#fff', color: '#0f172a', alignSelf: 'flex-start', boxShadow: '0 1px 2px rgba(15,23,42,.06)', overflowWrap: 'anywhere' },
  ownBubble: { background: '#dbeafe', alignSelf: 'flex-end' },
  sender: { fontSize: 11, fontWeight: 700, color: '#64748b', marginBottom: 4 },
  composer: { display: 'flex', gap: 10, padding: 16, borderTop: '1px solid #e5e7eb' },
  input: { flex: 1, minWidth: 0, border: '1px solid #cbd5e1', borderRadius: 10, padding: '12px 14px', fontSize: 14, outlineColor: '#2563eb' },
  send: { border: 0, borderRadius: 10, padding: '0 20px', background: '#2563eb', color: '#fff', fontWeight: 700, cursor: 'pointer' },
  muted: { padding: 20, color: '#64748b', fontSize: 14 },
  empty: { flex: 1, display: 'grid', placeItems: 'center', color: '#64748b', padding: 30, textAlign: 'center' },
};

export default function TelaChatWeb() {
  const router = useRouter();
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadChannels() {
      try {
        if (!streamClient.userID) {
          throw new Error('Sua sessão do chat não está conectada. Faça login novamente.');
        }

        const result = await streamClient.queryChannels(
          { type: 'messaging', members: { $in: [streamClient.userID] } },
          { last_message_at: -1 },
          { limit: 30, watch: true, state: true }
        );

        if (active) setChannels(result);
      } catch (err) {
        if (active) setError(err.message || 'Não foi possível carregar as conversas.');
      } finally {
        if (active) setLoading(false);
      }
    }

    loadChannels();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!selectedChannel) return undefined;

    let active = true;
    async function watchChannel() {
      try {
        await selectedChannel.watch();
        if (active) setMessages(selectedChannel.state.messages || []);
      } catch (err) {
        if (active) setError(err.message || 'Não foi possível abrir esta conversa.');
      }
    }
    watchChannel();

    const subscription = selectedChannel.on('message.new', (event) => {
      if (!event.message) return;
      setMessages((current) => current.some((item) => item.id === event.message.id)
        ? current
        : [...current, event.message]);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [selectedChannel]);

  async function sendMessage(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text || !selectedChannel || sending) return;

    setSending(true);
    setDraft('');
    try {
      const result = await selectedChannel.sendMessage({ text });
      if (result.message) {
        setMessages((current) => current.some((item) => item.id === result.message.id)
          ? current
          : [...current, result.message]);
      }
    } catch (err) {
      setDraft(text);
      setError(err.message || 'Não foi possível enviar a mensagem.');
    } finally {
      setSending(false);
    }
  }

  async function logout() {
    try {
      await desconectarUsuarioStream();
      router.replace('/login');
    } catch (err) {
      setError(err.message || 'Não foi possível sair do chat.');
    }
  }

  function getChannelName(channel) {
    const members = Object.values(channel.state.members || {});
    const other = members.find((member) => member.user?.id !== streamClient.userID);
    return channel.data?.name || other?.user?.name || other?.user?.id || 'Conversa';
  }

  return (
    <div style={styles.page}>
      <div style={styles.shell}>
        <aside style={styles.sidebar}>
          <div style={styles.header}>
            <h1 style={styles.title}>APIbryan Chat</h1>
            <button style={styles.logout} onClick={logout}>Sair</button>
          </div>
          {loading ? (
            <p style={styles.muted}>Carregando conversas...</p>
          ) : error && channels.length === 0 ? (
            <p style={styles.muted}>{error}</p>
          ) : channels.length === 0 ? (
            <p style={styles.muted}>Você ainda não participa de nenhuma conversa.</p>
          ) : (
            <div style={styles.list}>
              {channels.map((channel) => {
                const lastMessage = channel.state.messages?.slice(-1)[0];
                return (
                  <button
                    key={channel.cid}
                    style={{ ...styles.channelButton, ...(selectedChannel?.cid === channel.cid ? styles.activeChannel : {}) }}
                    onClick={() => { setError(''); setSelectedChannel(channel); }}
                  >
                    <div style={styles.channelName}>{getChannelName(channel)}</div>
                    <div style={styles.preview}>{lastMessage?.text || 'Abra para ver a conversa'}</div>
                  </button>
                );
              })}
            </div>
          )}
        </aside>

        <main style={styles.conversation}>
          {selectedChannel ? (
            <>
              <div style={styles.conversationHeader}>{getChannelName(selectedChannel)}</div>
              <div style={styles.messages}>
                {messages.map((message) => {
                  const own = message.user?.id === streamClient.userID;
                  return (
                    <div key={message.id} style={{ ...styles.bubble, ...(own ? styles.ownBubble : {}) }}>
                      {!own && <div style={styles.sender}>{message.user?.name || message.user?.id || 'Usuário'}</div>}
                      <div>{message.text}</div>
                    </div>
                  );
                })}
              </div>
              <form style={styles.composer} onSubmit={sendMessage}>
                <input
                  style={styles.input}
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Digite sua mensagem..."
                  aria-label="Mensagem"
                />
                <button style={styles.send} type="submit" disabled={sending || !draft.trim()}>
                  {sending ? 'Enviando...' : 'Enviar'}
                </button>
              </form>
            </>
          ) : (
            <div style={styles.empty}>
              <div>
                <h2>Suas conversas</h2>
                <p>Escolha uma conversa na lista para visualizar e enviar mensagens.</p>
                {error ? <p>{error}</p> : null}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
