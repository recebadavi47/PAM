import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground
} from 'react-native';

import styles from '../Estilo';

import { verificarQuiz } from '../Funcoe';


// -----------------------------------------------------
// PERSONAGENS (troque pelos seus)
// -----------------------------------------------------

const PERSONAGENS = [
  {
    id: '1',
    nome: 'Kim Suho',
    imagem: 'https://cf.preview.redd.it/dungeon-odyssey-this-is-my-mc-now-it-is-his-manhwa-v0-edqktd03b9sg1.jpeg?auto=webp&s=d5040e61c273d72cdb15639ea2891c2f706c1977',
    pergunta: 'Qual é o papel de Kim Suho na história?',
    opcoes: ['Protagonista', 'Vilão', 'Mentor', 'Comerciante'],
    correta: 'Protagonista'
  },
  {
    id: '2',
    nome: 'Personagem 2',
    pergunta: 'Escreva aqui a pergunta sobre ele(a)',
    opcoes: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
    correta: 'Opção A'
  },
  {
    id: '3',
    nome: 'Personagem 3',
    pergunta: 'Escreva aqui a pergunta sobre ele(a)',
    opcoes: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
    correta: 'Opção B'
  },
];


// -----------------------------------------------------
// CARD DO PERSONAGEM (cada um tem o próprio estado)
// -----------------------------------------------------

function CardPersonagem({ item }) {

  const [selecionada, setSelecionada] = useState('');
  const [confirmada, setConfirmada] = useState(false);
  const [mensagem, setMensagem] = useState('');

  function escolher(opcao) {
    if (!confirmada) {
      setSelecionada(opcao);
    }
  }

  function confirmar() {

    if (selecionada === '') {
      setMensagem('Escolha uma alternativa primeiro!');
      return;
    }

    if (confirmada) {
      return;
    }

    const acertou = verificarQuiz(selecionada, item.correta);

    setMensagem(
      acertou
        ? 'Resposta correta!'
        : 'Resposta incorreta! A resposta correta era: ' + item.correta
    );

    setConfirmada(true);
  }

  return (
    <View style={styles.card}>

      <Text style={styles.subtitulo}>
        {item.nome}
      </Text>

      <Text style={styles.pergunta}>
        {item.pergunta}
      </Text>

      {item.opcoes.map((opcao) => (

        <TouchableOpacity
          key={opcao}
          style={[
            styles.opcao,
            selecionada === opcao && styles.opcaoSelecionada
          ]}
          onPress={() => escolher(opcao)}
        >
          <Text style={styles.textoOpcao}>
            {opcao}
          </Text>
        </TouchableOpacity>

      ))}

      <TouchableOpacity
        style={styles.botao}
        onPress={confirmar}
      >
        <Text style={styles.textoBotao}>
          CONFIRMAR RESPOSTA
        </Text>
      </TouchableOpacity>

      <Text style={styles.mensagemQuiz}>
        {mensagem}
      </Text>

    </View>
  );
}


// -----------------------------------------------------
// HOME
// -----------------------------------------------------

export default function Home({ sair }) {

  return (

    <ImageBackground
      source={{
        uri: 'https://i.redd.it/edqktd03b9sg1.jpeg'
      }}
      style={[styles.imagemFundo, { width: '100%', height: '120%' }]}
      resizeMode="cover"
    >

      <View style={styles.overlay}>

       <FlatList
  data={PERSONAGENS}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <CardPersonagem item={item} />}
  contentContainerStyle={[
    styles.containerHome,
    {
      justifyContent: 'flex-start',
      paddingTop: 20,
    },
  ]}
  showsVerticalScrollIndicator={false}

  ListHeaderComponent={
    <Text style={styles.titulo2}>
      DUNGEON ODYSSEY
    </Text>
  }

  ListFooterComponent={
    <TouchableOpacity
      style={styles.botaoSair}
      onPress={sair}
    >
      <Text style={styles.textoSair}>
        SAIR DO COLÉGIO
      </Text>
    </TouchableOpacity>
  }
/>

      </View>

    </ImageBackground>

  );
}