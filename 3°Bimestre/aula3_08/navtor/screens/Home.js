import React from "react";
import { View, Text, StyleSheet, Button, Image, TextInput } from "react-native"; 

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-vindo à família...</Text>
      
      <Button 
        title="Voltar para Login" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
  <Image
        source={{
          uri: 'https://t4.ftcdn.net/jpg/05/67/10/73/360_F_567107362_PBmDoGsKDHy5VM4PWmZ9pKrhYmdraEMf.jpg',
        }}
        style={styles.image}
      />

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c20f08',
  },
  texto: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f8f2f2',
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
});