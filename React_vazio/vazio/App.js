import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.ytimg.com/vi/L9Km9DLDd7E/maxresdefault.jpg' }}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.titulo}>
          <Text style={{ 
            fontWeight: '900',
            color: '#ebebeb',
            fontSize: 22
        }}>
            SKINNY LOOSER - SUB URBAN
          </Text>
        </View>
        
        <View style={styles.cont_texto}>
          <Text style={{ 
            fontWeight: '900',
            color: '#4690ff',
            fontSize: 22
        }}>ABC</Text>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput 
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 2,
              width: 200,
              padding: 10,
              backgroundColor: 'white', 
            }}
            placeholder="Digite seu texto"
          />
        </View>
      </ScrollView>
    </ImageBackground>  
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  titulo: {
    backgroundColor: 'rgba(255, 155, 217, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  cont_texto: {
    backgroundColor: 'rgba(255, 155, 217, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    color: 'white',
  },
  inputContainer: {
    padding: 20,
    alignItems: 'center',
  }
});