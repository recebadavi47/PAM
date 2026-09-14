import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import styles from '../Estilo';
import { verificarLogin } from '../Funcoe';


export default function Login({ entrar }) {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');


  function fazerLogin() {

    if (verificarLogin(usuario, senha)) {

      entrar();

    } else {

      Alert.alert(
        'Acesso negado',
        'Usuário ou senha incorretos!'
      );

    }

  }


  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        STAR WARS
      </Text>

      <Text style={styles.subtitulo}>
        Terminal da Aliança
      </Text>


      <View style={styles.form}>

        <Text style={styles.label}>
          Usuário
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          placeholderTextColor="#777777"
          value={usuario}
          onChangeText={setUsuario}
        />


        <Text style={styles.label}>
          Senha
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#777777"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />


        <TouchableOpacity
          style={styles.botao}
          onPress={fazerLogin}
        >

          <Text style={styles.textoBotao}>
            ENTRAR NA BASE
          </Text>

        </TouchableOpacity>

      </View>

    </View>

  );

}