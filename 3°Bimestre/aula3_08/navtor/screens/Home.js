import React from "react";
import { View, Text, StyleSheet, Button, Image, TextInput } from "react-native"; 

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

         <Image
        source={{
          uri: 'https://www.theoakleafnews.com/wp-content/uploads/2022/03/the-batman-poster-e1647555360710.jpg',
        }}
        style={styles.image}
      />
      <Text style={styles.texto}>Bem-vindo à família...</Text>
    


      <Button 
        title="Voltar para Login" 
        color="#0f0e0e"
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