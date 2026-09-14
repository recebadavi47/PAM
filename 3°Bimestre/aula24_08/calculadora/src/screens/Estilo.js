import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  containerHome: {
    flexGrow: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },

  titulo: {
    color: '#FFE81F',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
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
    borderColor: '#FFE81F',
    borderRadius: 8,

    padding: 12,
    marginBottom: 10,

    fontSize: 16,
  },

  botao: {
    width: '100%',
    maxWidth: 400,

    backgroundColor: '#FFE81F',

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
  },

  card: {
    width: '100%',
    maxWidth: 500,

    backgroundColor: '#111111',

    borderWidth: 1,
    borderColor: '#FFE81F',
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
    borderColor: '#FFE81F',
    borderRadius: 8,

    padding: 12,

    alignItems: 'center',
  },

  textoOperacao: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  resultado: {
    color: '#00FF88',
    fontSize: 18,
    fontWeight: 'bold',

    textAlign: 'center',

    marginTop: 15,
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

  textoOpcao: {
    color: '#FFFFFF',
    fontSize: 16,
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