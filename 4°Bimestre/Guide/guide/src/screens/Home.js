import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image
} from 'react-native';

import styles from '../Estilo';

import { verificarQuiz } from '../Funcoe';


// -----------------------------------------------------
// PERSONAGENS (troque pelos seus)
// -----------------------------------------------------

const PERSONAGENS = [
  {
    id: '1',
    nome: 'Kim Jinwoo',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5smZocJsmzPWHMUXYfwpgs9iEsaj3apzthurV0419Q&s=10',
    pergunta: 'Qual é o papel de Kim Jinwoo na história?',
    opcoes: ['Protagonista', 'Vilão', 'Mentor', 'Figurante'],
    correta: 'Protagonista'
  },
  {
    id: '2',
    nome: 'Uther',
    imagem: 'https://i.pinimg.com/736x/47/8b/57/478b57408c4b1d559169ae69ec03c505.jpg',
    pergunta: 'Uther é um:',
    opcoes: ['Slime', 'Revenant', 'Zumbi', 'Hulk'],
    correta: 'Slime'
  },
  {
    id: '3',
    nome: 'Valicious',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDq2w8T5zwM5Xfm0o0Xc5Yazlm7kkwSsn0mXvTe9lONQR5wtLUX28K3SU&s=10',
    pergunta: 'Ele é o rei da...',
    opcoes: ['Vida', 'Morte', 'Natureza', 'Dos Minerais'],
    correta: 'Morte'
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

      {item.imagem ? (
        <Image
          source={{ uri: item.imagem }}
          style={{
            width: 300,
            height: 200,
            borderRadius: 10,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#d6d4b3',
            borderRadius: 8,
          }}
          resizeMode="cover"
        />
      ) : null}

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
        style={styles.botao2}
        onPress={confirmar}
      >
        <Text style={styles.textoBotao2}>
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