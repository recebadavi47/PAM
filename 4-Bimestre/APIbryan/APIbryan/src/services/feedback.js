import { Alert, Platform } from 'react-native';

export function mostrarErro(titulo, mensagem) {
  const texto = mensagem || 'Ocorreu um erro inesperado.';

  if (Platform.OS === 'web') {
    globalThis.alert(`${titulo}\n\n${texto}`);
    return;
  }

  Alert.alert(titulo, texto);
}
