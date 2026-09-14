import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground
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

    <ImageBackground
      source={{
        uri: 'https://p2.trrsf.com/image/fget/cf/500/0/images.terra.com/2026/01/12/kaisen-ff-01-t81crr30i2b5.jpg'
      }}
      style={styles.imagemFundo}
      resizeMode="cover"
    >

    <View style={[styles.overlay, styles.container]}>

      <Text style={styles.titulo}>
        JUJUTSU KAISEN
      </Text>

      <Text style={styles.subtitulo}>
        Portal do Colégio de Feitiçaria
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
            ENTRAR NO COLÉGIO
          </Text>

        </TouchableOpacity>

      </View>

    </View>

    </ImageBackground>

  );

}