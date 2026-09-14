import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerHome: {
    flexGrow: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    padding: 25,
  },

  form: {
    width: 360,
  },

  card: {
    width: 420,
    backgroundColor: '#111111',

    borderWidth: 2,
    borderColor: '#FFE81F',

    borderRadius: 12,

    padding: 20,
    marginBottom: 25,
  },

  titulo: {
    color: '#FFE81F',

    fontSize: 42,
    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 20,
  },

  subtitulo: {
    color: '#FFE81F',

    fontSize: 24,
    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 20,
  },

  label: {
    color: '#FFFFFF',

    fontSize: 16,

    marginTop: 10,
    marginBottom: 5,
  },

  input: {
    width: '100%',
    height: 48,

    backgroundColor: '#FFFFFF',
    color: '#000000',

    borderWidth: 2,
    borderColor: '#FFE81F',

    borderRadius: 8,

    paddingLeft: 12,

    fontSize: 16,

    marginBottom: 10,
  },

  botao: {
    width: '100%',
    height: 48,

    backgroundColor: '#FFE81F',

    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 15,
  },

  textoBotao: {
    color: '#000000',

    fontSize: 15,
    fontWeight: 'bold',
  },

  operacoes: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 10,
    marginBottom: 15,
  },

  botaoOperacao: {
    width: 80,
    height: 50,

    backgroundColor: '#222222',

    borderWidth: 2,
    borderColor: '#777777',

    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoOperacaoSelecionado: {
    backgroundColor: '#FFE81F',
    borderColor: '#FFFFFF',
  },

  textoOperacao: {
    color: '#FFFFFF',

    fontSize: 24,
    fontWeight: 'bold',
  },

  operacaoEscolhida: {
    color: '#FFFFFF',

    textAlign: 'center',

    fontSize: 16,

    marginTop: 5,
  },

  resultado: {
    color: '#00FF88',

    fontSize: 20,
    fontWeight: 'bold',

    textAlign: 'center',

    marginTop: 20,
  },

  numeroPergunta: {
    color: '#FFE81F',

    textAlign: 'center',

    fontSize: 15,

    marginBottom: 15,
  },

  pergunta: {
    color: '#FFFFFF',

    fontSize: 18,
    fontWeight: 'bold',

    marginBottom: 15,

    textAlign: 'center',
  },

  opcao: {
    width: '100%',

    backgroundColor: '#222222',

    borderWidth: 2,
    borderColor: '#666666',

    borderRadius: 8,

    padding: 13,

    marginBottom: 10,
  },

  opcaoSelecionada: {
    backgroundColor: '#4A4300',
    borderColor: '#FFE81F',
  },

  textoOpcao: {
    color: '#FFFFFF',

    fontSize: 16,

    textAlign: 'center',
  },

  mensagemQuiz: {
    color: '#00FF88',

    fontSize: 17,
    fontWeight: 'bold',

    textAlign: 'center',

    marginTop: 15,
  },

  botaoProximo: {
    width: '100%',
    height: 48,

    backgroundColor: '#4DA6FF',

    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 15,
  },

  resultadoFinal: {
    color: '#FFE81F',

    fontSize: 26,
    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 15,
  },

  pontuacao: {
    color: '#FFFFFF',

    fontSize: 20,

    textAlign: 'center',

    marginBottom: 15,
  },

  botaoSair: {
    width: 420,
    height: 50,

    backgroundColor: '#8B0000',

    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 40,
  },

  textoSair: {
    color: '#FFFFFF',

    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default styles;