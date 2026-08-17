import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function Home({ navigation }) {

  const usuarios = [
    { id: '1', nome: 'Ichigo Kurosaki', nomeZanpakuto: 'Zangetsu', imagem: ('https://i.redd.it/7davmfpsu4df1.png')},
    { id: '2', nome: 'Rukia Kuchiki', nomeZanpakuto: 'Sode no Shirayuki' },
    { id: '3', nome: 'Byakuya Kuchiki', nomeZanpakuto: 'Senbonzakura'},
    { id: '4', nome: 'Kenpachi Zaraki', nomeZanpakuto: 'Nozarashi'},
    { id: '5', nome: 'Toshiro Hitsugaya', nomeZanpakuto: 'Hyorinmaru'},
    { id: '6', nome: 'Sosuke Aizen', nomeZanpakuto: 'Kyoka Suigetsu'},
    { id: '7', nome: 'Shunsui Kyoraku', nomeZanpakuto: 'Katen Kyokotsu' },
    { id: '8', nome: 'Jushiro Ukitake', nomeZanpakuto: 'Sogyo no Kotowari' },
    { id: '9', nome: 'Genryusai Yamamoto', nomeZanpakuto: 'Ryujin Jakka' },
    { id: '10', nome: 'Kisuke Urahara', nomeZanpakuto: 'Benihime' },
    { id: '11', nome: 'Yoruichi Shihouin', nomeZanpakuto: 'Desconhecida' },
    { id: '12', nome: 'Renji Abarai', nomeZanpakuto: 'Zabimaru' },
    { id: '13', nome: 'Mayuri Kurotsuchi', nomeZanpakuto: 'Ashisogi Jizo' },
    { id: '14', nome: 'Shinji Hirako', nomeZanpakuto: 'Sakanade' },
    { id: '15', nome: 'Gin Ichimaru', nomeZanpakuto: 'Shinsō' },
    { id: '16', nome: 'Kaname Tosen', nomeZanpakuto: 'Suzumushi' },
    { id: '17', nome: 'Sajin Komamura', nomeZanpakuto: 'Tenken' },
    { id: '18', nome: 'Ikkaku Madarame', nomeZanpakuto: 'Hozukimaru' },
    { id: '19', nome: 'Izuru Kira', nomeZanpakuto: 'Wabisuke' },
    { id: '20', nome: 'Rangiku Matsumoto', nomeZanpakuto: 'Haineko' }
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Personagens de Bleach</Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>

            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text style={styles.zanpakuto}>
              Zanpakutō: {item.nomeZanpakuto}
            </Text>

             <Image
              source={item.imagem}
              style={styles.imagem}
              />

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  imagem: {
  width: 100,
  height: 200,
  marginBottom: 10,
  padding: 500,
},
  container: {
    flex: 1,
    backgroundColor: '#ffc421',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  item: {
    backgroundColor: '#eccfcf',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  zanpakuto: {
    fontSize: 15,
    marginTop: 5,
    color: '#555',
  },
});