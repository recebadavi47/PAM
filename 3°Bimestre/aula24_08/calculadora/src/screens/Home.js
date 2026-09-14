import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
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
    pergunta: 'Quem treinou Luke Skywalker em Dagobah?',
    opcoes: [
      'Yoda',
      'Han Solo',
      'Chewbacca',
      'Darth Vader'
    ],
    correta: 'Yoda'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Qual é a arma tradicional dos Jedi?',
    opcoes: [
      'Sabre de luz',
      'Blaster',
      'Arco',
      'Lança'
    ],
    correta: 'Sabre de luz'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Quem é o pai de Luke Skywalker?',
    opcoes: [
      'Darth Vader',
      'Obi-Wan Kenobi',
      'Han Solo',
      'Yoda'
    ],
    correta: 'Darth Vader'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Qual é o verdadeiro nome de Darth Vader?',
    opcoes: [
      'Anakin Skywalker',
      'Luke Skywalker',
      'Ben Solo',
      'Mace Windu'
    ],
    correta: 'Anakin Skywalker'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Quem é a irmã de Luke Skywalker?',
    opcoes: [
      'Leia Organa',
      'Rey',
      'Ahsoka Tano',
      'Padmé Amidala'
    ],
    correta: 'Leia Organa'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Quem é famoso por pilotar a Millennium Falcon?',
    opcoes: [
      'Han Solo',
      'Yoda',
      'Mace Windu',
      'Palpatine'
    ],
    correta: 'Han Solo'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Qual droide costuma acompanhar C-3PO?',
    opcoes: [
      'R2-D2',
      'BB-8',
      'K-2SO',
      'IG-11'
    ],
    correta: 'R2-D2'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Qual lado da Força é associado aos Sith?',
    opcoes: [
      'Lado Sombrio',
      'Lado Luminoso',
      'Lado Neutro',
      'Lado Jedi'
    ],
    correta: 'Lado Sombrio'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Qual é a espécie de Chewbacca?',
    opcoes: [
      'Wookiee',
      'Ewok',
      'Togruta',
      'Twi’lek'
    ],
    correta: 'Wookiee'
  },

  {
    nivel: 'FÁCIL',
    pergunta: 'Em qual planeta Luke Skywalker cresceu?',
    opcoes: [
      'Tatooine',
      'Naboo',
      'Coruscant',
      'Kamino'
    ],
    correta: 'Tatooine'
  },


  // =====================================================
  // MÉDIO - 11 ATÉ 20
  // =====================================================

  {
    nivel: 'MÉDIO',
    pergunta: 'Quem foi o mestre Jedi de Anakin Skywalker?',
    opcoes: [
      'Obi-Wan Kenobi',
      'Qui-Gon Jinn',
      'Mace Windu',
      'Yoda'
    ],
    correta: 'Obi-Wan Kenobi'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'De qual planeta Padmé Amidala era rainha?',
    opcoes: [
      'Naboo',
      'Alderaan',
      'Coruscant',
      'Tatooine'
    ],
    correta: 'Naboo'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Qual era o nome Sith do Imperador Palpatine?',
    opcoes: [
      'Darth Sidious',
      'Darth Maul',
      'Darth Vader',
      'Darth Bane'
    ],
    correta: 'Darth Sidious'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Qual era o nome Sith do Conde Dookan?',
    opcoes: [
      'Darth Tyranus',
      'Darth Revan',
      'Darth Plagueis',
      'Darth Nihilus'
    ],
    correta: 'Darth Tyranus'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Quem serviu como modelo genético para o Exército Clone?',
    opcoes: [
      'Jango Fett',
      'Boba Fett',
      'Obi-Wan Kenobi',
      'Captain Rex'
    ],
    correta: 'Jango Fett'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Qual é a espécie de Ahsoka Tano?',
    opcoes: [
      'Togruta',
      'Twi’lek',
      'Zabrak',
      'Mirialan'
    ],
    correta: 'Togruta'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Qual planeta era o centro político da República Galáctica?',
    opcoes: [
      'Coruscant',
      'Naboo',
      'Kamino',
      'Geonosis'
    ],
    correta: 'Coruscant'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Qual é o verdadeiro nome de Kylo Ren?',
    opcoes: [
      'Ben Solo',
      'Ben Skywalker',
      'Jacen Solo',
      'Finn Solo'
    ],
    correta: 'Ben Solo'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Quem derrotou o General Grievous em A Vingança dos Sith?',
    opcoes: [
      'Obi-Wan Kenobi',
      'Anakin Skywalker',
      'Mace Windu',
      'Yoda'
    ],
    correta: 'Obi-Wan Kenobi'
  },

  {
    nivel: 'MÉDIO',
    pergunta: 'Qual era o principal objetivo da Ordem 66?',
    opcoes: [
      'Eliminar os Jedi',
      'Destruir os Sith',
      'Atacar os Separatistas',
      'Libertar os clones'
    ],
    correta: 'Eliminar os Jedi'
  },


  // =====================================================
  // MUITO DIFÍCIL - 21 ATÉ 30
  // =====================================================

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Qual Lorde Sith é associado à criação da Regra de Dois?',
    opcoes: [
      'Darth Bane',
      'Darth Sidious',
      'Darth Plagueis',
      'Darth Maul'
    ],
    correta: 'Darth Bane'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Qual Jedi encomendou originalmente a criação do Exército Clone?',
    opcoes: [
      'Sifo-Dyas',
      'Mace Windu',
      'Yoda',
      'Qui-Gon Jinn'
    ],
    correta: 'Sifo-Dyas'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Qual era o nome de nascimento de Kanan Jarrus?',
    opcoes: [
      'Caleb Dume',
      'Ezra Bridger',
      'Cal Kestis',
      'Cere Junda'
    ],
    correta: 'Caleb Dume'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'A qual espécie pertence o Grande Almirante Thrawn?',
    opcoes: [
      'Chiss',
      'Togruta',
      'Twi’lek',
      'Zabrak'
    ],
    correta: 'Chiss'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Qual é a identificação numérica do Capitão Rex?',
    opcoes: [
      'CT-7567',
      'CT-5555',
      'CT-1409',
      'CC-2224'
    ],
    correta: 'CT-7567'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Qual Jedi Mandaloriano criou o Darksaber?',
    opcoes: [
      'Tarre Vizsla',
      'Pre Vizsla',
      'Paz Vizsla',
      'Din Djarin'
    ],
    correta: 'Tarre Vizsla'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Em qual lua fica localizada a Fortaleza Inquisitorius?',
    opcoes: [
      'Nur',
      'Jedha',
      'Endor',
      'Concordia'
    ],
    correta: 'Nur'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Qual forma de combate com sabre de luz é especialmente associada a Obi-Wan Kenobi?',
    opcoes: [
      'Forma III - Soresu',
      'Forma II - Makashi',
      'Forma IV - Ataru',
      'Forma VII - Juyo'
    ],
    correta: 'Forma III - Soresu'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'Qual estilo especializado da Forma VII é associado a Mace Windu?',
    opcoes: [
      'Vaapad',
      'Soresu',
      'Makashi',
      'Shien'
    ],
    correta: 'Vaapad'
  },

  {
    nivel: 'MUITO DIFÍCIL',
    pergunta: 'O Clã Wren, de Sabine Wren, fazia parte de qual grande casa Mandaloriana?',
    opcoes: [
      'Casa Vizsla',
      'Casa Kryze',
      'Casa Fett',
      'Casa Saxon'
    ],
    correta: 'Casa Vizsla'
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

    <ScrollView
      contentContainerStyle={styles.containerHome}
    >

      <Text style={styles.titulo}>
        STAR WARS
      </Text>


      {/* ============================================= */}
      {/* CALCULADORA */}
      {/* ============================================= */}

      <View style={styles.card}>

        <Text style={styles.subtitulo}>
          Calculadora da Força
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
          Quiz Jedi
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
          SAIR DA BASE
        </Text>

      </TouchableOpacity>

    </ScrollView>

  );

}