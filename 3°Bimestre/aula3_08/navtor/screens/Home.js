import React from "react";
import { View, Text, StyleSheet, Button } from "react-native"; 

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-vindo à Home!</Text>
      
      <Button 
        title="Voltar para Login" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});