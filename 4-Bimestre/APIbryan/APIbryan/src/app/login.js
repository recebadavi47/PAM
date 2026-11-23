import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

import { fazerLogin } from '../services/auth';
import { mostrarErro } from '../services/feedback';
import { conectarUsuarioStream } from '../services/stream';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function entrar() {
    if (!email.trim() || !senha) {
      mostrarErro('Atenção', 'Preencha o e-mail e a senha.');
      return;
    }

    try {
      setCarregando(true);
      const usuario = await fazerLogin(email, senha);
      await conectarUsuarioStream(usuario);
      router.replace('/chat');
    } catch (erro) {
      mostrarErro('Erro ao entrar', erro.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>APIbryan</Text>
      <Text style={styles.subtitulo}>Entre na sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.botao} onPress={entrar} disabled={carregando}>
        <Text style={styles.textoBotao}>{carregando ? 'Entrando...' : 'Entrar'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/cadastro')}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 25, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: '#2563eb' },
  subtitulo: { fontSize: 18, textAlign: 'center', marginBottom: 30, color: '#555' },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 15, marginBottom: 15 },
  botao: { backgroundColor: '#2563eb', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 5 },
  textoBotao: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  link: { color: '#2563eb', textAlign: 'center', marginTop: 20 },
});
