import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';

import styles from '../Estilo';

import {
  realizarCalculo,
  verificarQuiz
} from '../Funcoe';


// -----------------------------------------------------
// FUNÇÃO PARA EMBARALHAR AS ALTERNATIVAS
// -----------------------------------------------------

function embaralhar(lista) {

  const novaLista = [...lista];

  for (let i = novaLista.length - 1; i > 0; i--) {

    const j = Math.floor(
      Math.random() * (i + 1)
    );

    const temporario = novaLista[i];

    novaLista[i] = novaLista[j];

    novaLista[j] = temporario;
  }

  return novaLista;
}


// -----------------------------------------------------
// 30 PERGUNTAS
// -----------------------------------------------------

const PERGUNTAS = [

  // =====================================================
  // FÁCIL - 1 ATÉ 10
  // =====================================================

  {
    nivel: 'FÁCIL',
    pergunta: 'Quem é o protagonista principal de Jujutsu Kaisen?',
    opcoes: [
      'Yuji Itadori',
      'Megumi Fushiguro',
      'Satoru Gojo',
      'Sukuna'
    ],
    correta: 'Yuji Itadori'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Qual item amaldiçoado Yuji engole para ganhar seus poderes?',
    opcoes: [
      'Dedo de Sukuna',
      'Olho de Sukuna',
      'Coração de Sukuna',
      'Dente de Sukuna'
    ],
    correta: 'Dedo de Sukuna'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Quem é o professor responsável pela turma de Yuji?',
    opcoes: [
      'Satoru Gojo',
      'Masamichi Yaga',
      'Kento Nanami',
      'Shoko Ieiri'
    ],
    correta: 'Satoru Gojo'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Qual é a técnica amaldiçoada de Megumi Fushiguro?',
    opcoes: [
      'Dez Sombras',
      'Boogie Woogie',
      'Straw Doll Technique',
      'Idle Transfiguration'
    ],
    correta: 'Dez Sombras'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Quem é a colega de Yuji que luta usando martelo e pregos?',
    opcoes: [
      'Nobara Kugisaki',
      'Maki Zenin',
      'Mai Zenin',
      'Shoko Ieiri'
    ],
    correta: 'Nobara Kugisaki'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Em qual escola Yuji estuda para se tornar feiticeiro?',
    opcoes: [
      'Colégio Técnico de Feitiçaria de Tóquio',
      'Academia de Kyoto',
      'Instituto Amaldiçoado de Osaka',
      'Escola Superior de Sendai'
    ],
    correta: 'Colégio Técnico de Feitiçaria de Tóquio'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Quem é conhecido como "Rei das Maldições"?',
    opcoes: [
      'Ryomen Sukuna',
      'Mahito',
      'Jogo',
      'Kenjaku'
    ],
    correta: 'Ryomen Sukuna'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Qual é a cor dos olhos de Satoru Gojo?',
    opcoes: [
      'Azul',
      'Verde',
      'Vermelho',
      'Roxo'
    ],
    correta: 'Azul'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'O que Megumi invoca ao usar sua técnica amaldiçoada?',
    opcoes: [
      'Sombras com formas de animais',
      'Espadas flutuantes',
      'Bonecos de palha',
      'Pregos amaldiçoados'
    ],
    correta: 'Sombras com formas de animais'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Em qual país se passa a história de Jujutsu Kaisen?',
    opcoes: [
      'Japão',
      'China',
      'Coreia do Sul',
      'Estados Unidos'
    ],
    correta: 'Japão'
  },


  // =====================================================
  // MÉDIO - 11 ATÉ 20
  // =====================================================

  {
    nivel: 'MÉDIO',
    pergunta: 'Qual é a técnica amaldiçoada de Satoru Gojo?',
    opcoes: [
      'Seis Olhos e Infinito (Limitless)',
      'Dez Sombras',
      'Straw Doll Technique',
      'Ratio Technique'
    ],
    correta: 'Seis Olhos e Infinito (Limitless)'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Quem é a colega de Megumi, do clã Zenin, especialista em armas amaldiçoadas?',
    opcoes: [
      'Maki Zenin',
      'Nobara Kugisaki',
      'Shoko Ieiri',
      'Momo Nishimiya'
    ],
    correta: 'Maki Zenin'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Qual é o nome da irmã gêmea de Maki Zenin?',
    opcoes: [
      'Mai Zenin',
      'Yuki Zenin',
      'Naoya Zenin',
      'Ogi Zenin'
    ],
    correta: 'Mai Zenin'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Qual feiticeiro especial é conhecido pela técnica Boogie Woogie?',
    opcoes: [
      'Aoi Todo',
      'Kento Nanami',
      'Yuta Okkotsu',
      'Toji Fushiguro'
    ],
    correta: 'Aoi Todo'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Qual é o nome da técnica amaldiçoada de Nobara Kugisaki?',
    opcoes: [
      'Straw Doll Technique',
      'Dez Sombras',
      'Idle Transfiguration',
      'Dismantle'
    ],
    correta: 'Straw Doll Technique'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Quem é o diretor da Jujutsu High de Tóquio?',
    opcoes: [
      'Masamichi Yaga',
      'Yuki Tsukumo',
      'Gakuganji',
      'Kento Nanami'
    ],
    correta: 'Masamichi Yaga'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Qual é o nome da técnica de corte usada por Sukuna?',
    opcoes: [
      'Dismantle (Desmembrar)',
      'Cleave',
      'Malevolent Shrine',
      'World Cutting Slash'
    ],
    correta: 'Dismantle (Desmembrar)'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Quem foi colega de escola de Gojo e se tornou um dos principais vilões?',
    opcoes: [
      'Geto Suguru',
      'Toji Fushiguro',
      'Mahito',
      'Choso'
    ],
    correta: 'Geto Suguru'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Quem é a curadora responsável pela enfermaria da Jujutsu High?',
    opcoes: [
      'Shoko Ieiri',
      'Mei Mei',
      'Utahime Iori',
      'Yuki Tsukumo'
    ],
    correta: 'Shoko Ieiri'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Qual grande evento acontece no arco em que Tóquio é isolada por um domínio?',
    opcoes: [
      'Incidente de Shibuya',
      'Torneio de Kyoto',
      'Missão de Extermínio de Maldições',
      'Julgamento de Yuji'
    ],
    correta: 'Incidente de Shibuya'
  },


  // =====================================================
  // MUITO DIFÍCIL - 21 ATÉ 30
  // =====================================================

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Quem estava por trás do corpo de Geto durante o Incidente de Shibuya?',
    opcoes: [
      'Kenjaku',
      'Mahito',
      'Jogo',
      'Sukuna'
    ],
    correta: 'Kenjaku'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Quantos dedos de Sukuna existem ao todo na história?',
    opcoes: [
      '20',
      '10',
      '15',
      '8'
    ],
    correta: '20'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Qual é o nome do espírito amaldiçoado ligado a Yuta Okkotsu?',
    opcoes: [
      'Rika Orimoto',
      'Mai Zenin',
      'Momo Nishimiya',
      'Kasumi Miwa'
    ],
    correta: 'Rika Orimoto'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Qual é o nome do Domínio Expandido de Satoru Gojo?',
    opcoes: [
      'Unlimited Void (Domínio Infinito Imutável)',
      'Malevolent Shrine',
      'Coffin of the Iron Mountain',
      'Chimera Shadow Garden'
    ],
    correta: 'Unlimited Void (Domínio Infinito Imutável)'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Qual é o nome do Domínio Expandido de Sukuna?',
    opcoes: [
      'Malevolent Shrine',
      'Unlimited Void',
      'Chimera Shadow Garden',
      'Self-Embodiment of Perfection'
    ],
    correta: 'Malevolent Shrine'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'A qual clã pertence originalmente a técnica Dez Sombras?',
    opcoes: [
      'Clã Zenin',
      'Clã Gojo',
      'Clã Kamo',
      'Clã Fushiguro'
    ],
    correta: 'Clã Zenin'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Qual é a técnica amaldiçoada de Mahito?',
    opcoes: [
      'Idle Transfiguration (Transfiguração Ociosa)',
      'Ratio Technique',
      'Straw Doll Technique',
      'Boogie Woogie'
    ],
    correta: 'Idle Transfiguration (Transfiguração Ociosa)'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Quem é o feiticeiro conhecido pela "Ratio Technique" (Técnica da Proporção)?',
    opcoes: [
      'Kento Nanami',
      'Aoi Todo',
      'Yuta Okkotsu',
      'Choso'
    ],
    correta: 'Kento Nanami'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Qual é o apelido carinhoso dado a Kento Nanami pelos alunos?',
    opcoes: [
      'Nanamin',
      'Nanacchi',
      'Kentokun',
      'Sensei Nanami'
    ],
    correta: 'Nanamin'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Quem é revelado como o pai biológico de Yuji Itadori, um forte lutador sem energia amaldiçoada?',
    opcoes: [
      'Toji Fushiguro',
      'Masamichi Yaga',
      'Kenjaku',
      'Choso'
    ],
    correta: 'Toji Fushiguro'
  }

];


// -----------------------------------------------------
// PREPARA O QUIZ COM ALTERNATIVAS EMBARALHADAS
// -----------------------------------------------------

function prepararPerguntas() {

  return PERGUNTAS.map((item) => {

    return {
      ...item,
      opcoes: embaralhar(item.opcoes)
    };

  });

}


// -----------------------------------------------------
// HOME
// -----------------------------------------------------

export default function Home({ sair }) {


  // =====================================================
  // CALCULADORA
  // =====================================================

  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');

  const [operacao, setOperacao] = useState('+');

  const [resultado, setResultado] = useState('');


  function calcular() {

    const valor = realizarCalculo(
      numero1,
      numero2,
      operacao
    );

    setResultado(valor);
  }


  // =====================================================
  // QUIZ
  // =====================================================

  const [perguntasQuiz, setPerguntasQuiz] =
    useState(prepararPerguntas);

  const [perguntaAtual, setPerguntaAtual] =
    useState(0);

  const [respostaSelecionada, setRespostaSelecionada] =
    useState('');

  const [respostaConfirmada, setRespostaConfirmada] =
    useState(false);

  const [pontuacao, setPontuacao] =
    useState(0);

  const [mensagemQuiz, setMensagemQuiz] =
    useState('');

  const [quizFinalizado, setQuizFinalizado] =
    useState(false);


  const pergunta = perguntasQuiz[perguntaAtual];


  function escolherResposta(opcao) {

    if (respostaConfirmada === false) {
      setRespostaSelecionada(opcao);
    }

  }


  function confirmarResposta() {

    if (respostaSelecionada === '') {

      setMensagemQuiz(
        'Escolha uma alternativa primeiro!'
      );

      return;
    }


    if (respostaConfirmada === true) {
      return;
    }


    const acertou = verificarQuiz(
      respostaSelecionada,
      pergunta.correta
    );


    if (acertou) {

      setPontuacao(
        pontos => pontos + 1
      );

      setMensagemQuiz(
        'Resposta correta!'
      );

    } else {

      setMensagemQuiz(
        'Resposta incorreta! A resposta correta era: ' +
        pergunta.correta
      );

    }


    setRespostaConfirmada(true);
  }


  function proximaPergunta() {

    if (respostaConfirmada === false) {
      return;
    }


    if (
      perguntaAtual <
      perguntasQuiz.length - 1
    ) {

      setPerguntaAtual(
        perguntaAtual + 1
      );

      setRespostaSelecionada('');

      setRespostaConfirmada(false);

      setMensagemQuiz('');

    } else {

      setQuizFinalizado(true);

    }

  }


  function reiniciarQuiz() {

    // Embaralha novamente todas as respostas
    setPerguntasQuiz(
      prepararPerguntas()
    );

    setPerguntaAtual(0);

    setRespostaSelecionada('');

    setRespostaConfirmada(false);

    setPontuacao(0);

    setMensagemQuiz('');

    setQuizFinalizado(false);
  }


  return (

    <ImageBackground
      source={{
        uri: 'https://p2.trrsf.com/image/fget/cf/500/0/images.terra.com/2026/01/12/kaisen-ff-01-t81crr30i2b5.jpg'
      }}
      style={styles.imagemFundo}
      resizeMode="cover"
    >

    <View style={styles.overlay}>

    <ScrollView
      contentContainerStyle={styles.containerHome}
    >

      <Text style={styles.titulo}>
        JUJUTSU KAISEN
      </Text>


      {/* ============================================= */}
      {/* CALCULADORA */}
      {/* ============================================= */}

      <View style={styles.card}>

        <Text style={styles.subtitulo}>
          Calculadora de Energia Amaldiçoada
        </Text>


        <Text style={styles.label}>
          Primeiro número
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite um número"
          placeholderTextColor="#777777"
          keyboardType="numeric"
          value={numero1}
          onChangeText={setNumero1}
        />


        <Text style={styles.label}>
          Segundo número
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite outro número"
          placeholderTextColor="#777777"
          keyboardType="numeric"
          value={numero2}
          onChangeText={setNumero2}
        />


        <Text style={styles.label}>
          Escolha a operação:
        </Text>


        <View style={styles.operacoes}>

          {['+', '-', '*', '/'].map((item) => (

            <TouchableOpacity

              key={item}

              style={[
                styles.botaoOperacao,

                operacao === item &&
                styles.botaoOperacaoSelecionado
              ]}

              onPress={() =>
                setOperacao(item)
              }

            >

              <Text style={styles.textoOperacao}>

                {item === '*'
                  ? '×'
                  : item === '/'
                  ? '÷'
                  : item}

              </Text>

            </TouchableOpacity>

          ))}

        </View>


        <Text style={styles.operacaoEscolhida}>

          Operação escolhida: {
            operacao === '*'
              ? '×'
              : operacao === '/'
              ? '÷'
              : operacao
          }

        </Text>


        <TouchableOpacity
          style={styles.botao}
          onPress={calcular}
        >

          <Text style={styles.textoBotao}>
            CALCULAR
          </Text>

        </TouchableOpacity>


        <Text style={styles.resultado}>
          Resultado: {resultado}
        </Text>

      </View>


      {/* ============================================= */}
      {/* QUIZ */}
      {/* ============================================= */}

      <View style={styles.card}>

        <Text style={styles.subtitulo}>
          Quiz Feiticeiro
        </Text>


        {!quizFinalizado ? (

          <>

            <Text style={styles.numeroPergunta}>

              Pergunta {perguntaAtual + 1} de 30

            </Text>


            <Text
              style={{
                color:
                  pergunta.nivel === 'FÁCIL'
                    ? '#00FF88'
                    : pergunta.nivel === 'MÉDIO'
                    ? '#FFE81F'
                    : '#FF4444',

                fontWeight: 'bold',

                fontSize: 17,

                textAlign: 'center',

                marginBottom: 15
              }}
            >

              Dificuldade: {pergunta.nivel}

            </Text>


            <Text style={styles.pergunta}>

              {pergunta.pergunta}

            </Text>


            {pergunta.opcoes.map(
              (opcao) => (

                <TouchableOpacity

                  key={opcao}

                  style={[
                    styles.opcao,

                    respostaSelecionada === opcao &&
                    styles.opcaoSelecionada
                  ]}

                  onPress={() =>
                    escolherResposta(opcao)
                  }

                >

                  <Text style={styles.textoOpcao}>
                    {opcao}
                  </Text>

                </TouchableOpacity>

              )
            )}


            <TouchableOpacity
              style={styles.botao}
              onPress={confirmarResposta}
            >

              <Text style={styles.textoBotao}>
                CONFIRMAR RESPOSTA
              </Text>

            </TouchableOpacity>


            <Text style={styles.mensagemQuiz}>
              {mensagemQuiz}
            </Text>


            {respostaConfirmada && (

              <TouchableOpacity
                style={styles.botaoProximo}
                onPress={proximaPergunta}
              >

                <Text style={styles.textoBotao}>

                  {
                    perguntaAtual === 29
                      ? 'VER RESULTADO'
                      : 'PRÓXIMA PERGUNTA'
                  }

                </Text>

              </TouchableOpacity>

            )}

          </>

        ) : (

          <>

            <Text style={styles.resultadoFinal}>
              Quiz finalizado!
            </Text>


            <Text style={styles.pontuacao}>

              Você acertou {pontuacao} de 30 perguntas.

            </Text>


            <TouchableOpacity
              style={styles.botao}
              onPress={reiniciarQuiz}
            >

              <Text style={styles.textoBotao}>
                JOGAR NOVAMENTE
              </Text>

            </TouchableOpacity>

          </>

        )}

      </View>


      {/* ============================================= */}
      {/* SAIR */}
      {/* ============================================= */}

      <TouchableOpacity
        style={styles.botaoSair}
        onPress={sair}
      >

        <Text style={styles.textoSair}>
          SAIR DO COLÉGIO
        </Text>

      </TouchableOpacity>

    </ScrollView>

    </View>

    </ImageBackground>

  );

}