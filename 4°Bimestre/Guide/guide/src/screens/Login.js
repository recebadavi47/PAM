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
        uri: 'https://cf.preview.redd.it/dungeon-odyssey-do-not-read-the-novel-for-this-barry-o-v0-xycyblrwjale1.jpeg?auto=webp&s=67da777d5bc48332036e14cd2a1c7aebd658675f'
      }}
      style={styles.imagemFundo}
      resizeMode="cover"
    >

    <View style={[styles.overlay, styles.container]}>

      <Text style={styles.titulo}>
        Dungeon Odyssey
      </Text>

      


      <View style={styles.form}>

        <Text style={styles.label}>
          Mestre de Dungeon
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário - ex: pietrao..."
          placeholderTextColor="#777777"
          value={usuario}
          onChangeText={setUsuario}
        />


        <Text style={styles.label}>
          Senha
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha - ex: 1234"
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
            ENTRAR NA DUNGEON
          </Text>

        </TouchableOpacity>

      </View>

    </View>

    </ImageBackground>

  );

}