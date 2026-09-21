import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://t4.ftcdn.net/jpg/05/67/10/73/360_F_567107362_PBmDoGsKDHy5VM4PWmZ9pKrhYmdraEMf.jpg',
        }}
        style={styles.image}
      />

      <Text style={styles.label}>Digite o e-mail</Text>
      <TextInput 
        style={styles.input} 
        placeholder="RobinReiDelas13@gmail.com" 
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="gostoso123"
        secureTextEntry
      />

      <Button
        title="Entrar"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#c20f08',
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fffefe',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
    color:'#f7f7f7',
  },
});