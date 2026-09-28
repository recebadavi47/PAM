import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  containerHome: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },

  imagemFundo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },


  titulo: {
  marginTop:200,
  color: '#B983FF',
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 5,
  borderWidth: 2,
  borderColor: '#B983FF',
  borderRadius: 8,
  paddingHorizontal: 12,
  paddingVertical: 4,
  backgroundColor:'#272727bb',
  fontFamily: 'Georgia',
},
  titulo2: {
  marginTop:200,
  color: '#d6d4b3',
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 20,
  borderWidth: 2,
  borderColor: '#d6d4b3',
  borderRadius: 8,
  paddingHorizontal: 12,
  paddingVertical: 4,
  backgroundColor:'#272727bb',
  fontFamily: 'Georgia',
},

  subtitulo: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 25,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,

    width: '100%',
    maxWidth: 400,
  },

  input: {
    width: '100%',
    maxWidth: 400,

    backgroundColor: '#FFFFFF',
    color: '#000000',

    borderWidth: 2,
    borderColor: '#B983FF',
    borderRadius: 8,

    padding: 12,
    marginBottom: 10,

    fontSize: 16,
  },

  botao: {
    width: '100%',
    maxWidth: 400,

    
    backgroundColor: '#d6d4b3',

    padding: 15,
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 20,
  },

  textoBotao: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
  },

  card: {
    width: '100%',
    maxWidth: 500,

    backgroundColor: '#111111a1',

    borderWidth: 1,
    borderColor: '#d6d4b3',
    borderRadius: 10,

    padding: 20,
    marginBottom: 20,
  },

  operacoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },

  botaoOperacao: {
    width: '22%',

    backgroundColor: '#222222',

    borderWidth: 1,
    borderColor: '#B983FF',
    borderRadius: 8,

    padding: 12,

    alignItems: 'center',
  },

  botaoOperacaoSelecionado: {
    backgroundColor: '#3D1F5C',
    borderColor: '#FF2E63',
  },

  textoOperacao: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  operacaoEscolhida: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 5,
  },

  resultado: {
    color: '#39FF14',
    fontSize: 18,
    fontWeight: 'bold',

    textAlign: 'center',

    marginTop: 15,
  },

  numeroPergunta: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 5,
  },

  pergunta: {
    color: '#FFFFFF',
    fontSize: 17,

    marginTop: 10,
    marginBottom: 10,
  },

  opcao: {
    backgroundColor: '#222222',

    borderWidth: 1,
    borderColor: '#FFFFFF',

    borderRadius: 8,

    padding: 12,
    marginBottom: 8,
  },

  opcaoSelecionada: {
    backgroundColor: '#3D1F5C',
    borderColor: '#B983FF',
  },

  textoOpcao: {
    color: '#FFFFFF',
    fontSize: 16,
  },

  mensagemQuiz: {
    color: '#FFE81F',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 12,
  },

  botaoProximo: {
    width: '100%',
    maxWidth: 400,

    backgroundColor: '#FF2E63',

    padding: 15,
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 15,
  },

  resultadoFinal: {
    color: '#B983FF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  pontuacao: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },

  form: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },

  botaoSair: {
    width: '100%',
    maxWidth: 500,

    backgroundColor: '#8B0000',

    padding: 14,
    borderRadius: 8,

    alignItems: 'center',

    marginBottom: 20,
  },

  textoSair: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

});

export default styles;