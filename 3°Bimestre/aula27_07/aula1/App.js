import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Button } from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      source={{ uri: 'https://www.planocritico.com/wp-content/uploads/2024/06/tio_patinhas_e_a_moedinha_do_infinito_plano_critico.jpg' }}
      style={styles.background}
    >

      
      <ScrollView style={{
        backgroundColor: 'rgba(255, 255, 255, 0.91)',
        borderRadius:20,

      }}>
        <View style={styles.titulo}>
          <Text style={{ 
            fontWeight: '900',
            color: '#ffdc3f',
            fontSize: 22,
        }}>
            BANCO DO TIO PATINHAS
          </Text>
        </View>
        
<View style={styles.cont_texto}>
          <Text style={{ 
            fontWeight: '900',
            color: '#f7f7f4',
            fontSize: 15
        }}>
          Digite seu email
        </Text>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput 
            style={{
              height: 15,
              borderColor: "rgba(214, 83, 74, 1)",
              borderWidth: 2,
              width: 200,
              marginBottom:20,
              padding: 10,
              backgroundColor: '#ffdc3f21', 
              color:'#a3a3a2b7',
            }}
            placeholder="DaviBurro@gmail.com"
          />
        </View>



        <View style={styles.cont_texto}>
          <Text style={{ 
            fontWeight: '900',
            color: '#f7f7f4',
            fontSize: 15
        }}>
          Digite sua senha
        </Text>
        </View>
        

        <View style={styles.inputContainer}>
          <TextInput 
            style={{
              height: 15,
              borderColor: "rgba(214, 83, 74, 1)",
              borderWidth: 2,
              width: 200,
              marginBottom:20,
              padding: 10,
              backgroundColor: '#ffdc3f21', 
              color:'#a3a3a2b7',
            }}
            placeholder="Senha"
          />
        <View style={{
          alignItems: 'center',
          marginRight: 60,
          backgroundColor: "rgba(214, 83, 74, 1)" ,
        }}>
                <Button onPress={() => {setIsHungry(false);}} title={'BABOSA '}>
                  
                </Button>

        </View>
         
        </View>
      </ScrollView>
    </ImageBackground>  
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  titulo: {
    backgroundColor: 'rgba(214, 83, 74, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    marginTop: 100,
  },
  cont_texto: {
    marginTop: 200,
    backgroundColor: 'rgba(214, 83, 74, 0.64)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop:100,
    marginLeft:100,
    marginRight:100,
    borderRadius: 10,
    color: 'white',
  },
  inputContainer: {
    padding: -20,
    marginTop:20,
    marginLeft: 72,
  }
});