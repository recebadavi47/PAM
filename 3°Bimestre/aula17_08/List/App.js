import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

function CardPersonagem({ item }) {
  const player = useVideoPlayer(
    item.video || '',
    (player) => {
      if (item.video) {
        player.loop = true;
        player.play();
      }
    }
  );

  return (
    <View style={styles.item}>

      <Text style={styles.nome}>
        {item.nome}
      </Text>
      <Text
        style={[
          styles.zanpakuto,
          { color: item.corZanpakuto }
        ]}
      >
        Zanpakutō: {item.nomeZanpakuto}
      </Text>

      {item.video ? (
        <VideoView
          player={player}
          style={styles.imagem}
          nativeControls={false}
          contentFit="cover"
        />
      ) : item.imagem ? (
        <Image
          source={{ uri: item.imagem }}
          style={styles.imagem}
        />
      ) : null}

    </View>
  );
}

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
      corZanpakuto: '#a7dfff',
      video: 'https://motionbgs.com/media/6814/rukia-kuchiki-bankai.960x540.mp4'
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

      {/* CABEÇALHO */}
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
          <CardPersonagem item={item} />
        )}

        showsVerticalScrollIndicator={false}
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