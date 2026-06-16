import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      source={{ uri: 'https://static.poder360.com.br/uploads/2026/06/endrick-camisa-10-6-jun-2026-848x477.jpg' }}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.titulo}>
          <Text style={{ 
            fontWeight: '900',
            color: '#fffc46',
            fontSize: 22,
        }}>
            ENDRICK 
          </Text>
        </View>
        
        <View style={styles.cont_texto}>
          <Text style={{ 
            fontWeight: '900',
            color: '#fffc46',
            fontSize: 22
        }}>
          O 9 DO HEXA DO BRASIL
        </Text>
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
    backgroundColor: 'rgba(123, 255, 167, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    marginTop: 200,
  },
  cont_texto: {
    backgroundColor: 'rgba(123, 255, 167, 0.8)',
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