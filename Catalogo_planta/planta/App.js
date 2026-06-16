import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.fundo}>
    <View>

      <Text style={{color:'white', fontWeight:'900'}}>conmias, Bem vindo ao SITE!!!!!</Text>

    </View>

      <View>
        <Button onPress={() => {setIsHungry(false);}} title={'BABOSA '}>
          
        </Button>

        <Button onPress={() => {setIsHungry(false);}} title={'Abacatero'}>
          
        </Button>

        <Button onPress={() => {setIsHungry(false);}} title={'Maconha'}>
          
        </Button>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#33b945',
    height: '100%',
    width: '100%',
    fontFamily: 'montserrat',
  },
});