import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import { consultarEndereco } from './rsc/funcoe';
import styles from './rsc/estilo';

export default function App() {
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua, setRua] = useState('');
  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState('');

  async function pesquisar() {
    if (carregando) return;

    Keyboard.dismiss();
    setMensagem('');
    setResultados([]);
    setCarregando(true);

    try {
      const dados = await consultarEndereco(uf, cidade, rua);
      setResultados(dados);

      if (dados.length === 0) {
        setMensagem('Nenhum endereço encontrado.');
      }
    } catch (erro) {
      setMensagem(erro.message);
    } finally {
      setCarregando(false);
    }
  }

  function renderItem({ item }) {
    return (
      <View style={styles.card}>
        <Text style={styles.cep}>CEP: {item.cep}</Text>
        <Text style={styles.textoCard}>
          Logradouro: {item.logradouro}
        </Text>
        <Text style={styles.textoCard}>
          Bairro: {item.bairro || 'Não informado'}
        </Text>
        <Text style={styles.textoCard}>Cidade: {item.localidade}</Text>
        <Text style={styles.textoCard}>Estado: {item.uf}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Consulta de CEP</Text>
        <Text style={styles.subtitulo}>
          Encontre CEPs através do nome da rua.
        </Text>
      </View>

      <View style={styles.conteudo}>
        <Text style={styles.label}>Estado (UF)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: SP"
          value={uf}
          onChangeText={setUf}
          maxLength={2}
          autoCapitalize="characters"
        />

        <Text style={styles.label}>Cidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: São Paulo"
          value={cidade}
          onChangeText={setCidade}
          autoCapitalize="words"
        />

        <Text style={styles.label}>Nome da rua</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Avenida Paulista"
          value={rua}
          onChangeText={setRua}
          autoCapitalize="words"
          returnKeyType="search"
          onSubmitEditing={pesquisar}
        />

        <TouchableOpacity
          style={[styles.botao, carregando && styles.botaoDesabilitado]}
          onPress={pesquisar}
          disabled={carregando}
        >
          {carregando ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.textoBotao}>Pesquisar endereço</Text>
          )}
        </TouchableOpacity>

        {mensagem !== '' && (
          <Text style={styles.mensagem}>{mensagem}</Text>
        )}

        {resultados.length > 0 && (
          <Text style={styles.resultadoTitulo}>
            Endereços encontrados ({resultados.length})
          </Text>
        )}

        <FlatList
          data={resultados}
          keyExtractor={(item, index) => `${item.cep}-${index}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            !carregando && mensagem === '' ? (
              <Text style={styles.vazio}>
                Informe os dados para pesquisar.
              </Text>
            ) : null
          }
        />
      </View>
    </View>
  );
}