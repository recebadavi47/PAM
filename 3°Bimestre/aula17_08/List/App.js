import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function Home({ navigation }) {

  const imagemBleach = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5cPhNbx3gGhlAK8Faws75opwWEfV7wdPX-T-IFvO9ODrsdpmhmHIsQw&s=10.png'
  };

  const usuarios = [
    {
      id: '1',
      nome: 'Ichigo Kurosaki',
      nomeZanpakuto: 'Zangetsu',
      imagem: 'https://i.redd.it/7davmfpsu4df1.png'
    },
    {
      id: '2',
      nome: 'Rukia Kuchiki',
      nomeZanpakuto: 'Sode no Shirayuki',
      imagem: 'https://i.pinimg.com/736x/b9/54/b3/b954b30e4f0a3f33c19fae6df50ea5bc.jpg'
    },
    {
      id: '3',
      nome: 'Byakuya Kuchiki',
      nomeZanpakuto: 'Senbonzakura'
    },
    {
      id: '4',
      nome: 'Kenpachi Zaraki',
      nomeZanpakuto: 'Nozarashi'
    },
    {
      id: '5',
      nome: 'Toshiro Hitsugaya',
      nomeZanpakuto: 'Hyorinmaru'
    },
    {
      id: '6',
      nome: 'Sosuke Aizen',
      nomeZanpakuto: 'Kyoka Suigetsu'
    },
  ];

  return (
    <View style={styles.container}>

      {/* IMAGEM NO COMEÇO DO SITE */}
      <View style={styles.bleach}>
        <Image
          source={imagemBleach}
          style={styles.imagemBleach}
        />

        <Text style={styles.titulo}>
          PERSONAGENS DE BLEACH
        </Text>
      </View>

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

            {item.imagem && (
              <Image
                source={{ uri: item.imagem }}
                style={styles.imagem}
              />
            )}

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#050505',
    padding: 20,
  },

  /* CABEÇALHO */
  bleach: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    backgroundColor: '#FF8138',
    borderWidth: 3,
    borderColor: '#000000',
    overflow: 'hidden',
  },

  imagemBleach: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#FF8138',
  },

  titulo: {
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#000000',
    color: '#FF8138',
    letterSpacing: 2,
  },

  /* CARDS DOS PERSONAGENS */
  item: {
    backgroundColor: '#111111',
    padding: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FF8138',
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  zanpakuto: {
    fontSize: 15,
    marginTop: 5,
    color: '#ffae7f',
  },

  imagem: {
    width: '100%',
    height: 200,
    marginTop: 10,
    resizeMode: 'cover',
  },

});