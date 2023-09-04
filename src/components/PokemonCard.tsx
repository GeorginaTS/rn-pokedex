import { Text, View, StyleSheet, Image } from 'react-native';
import useFetch from '../hooks/useFetch';

interface PokemonCardProps {
  url: string;
}

export function PokemonCard({ url }: PokemonCardProps ) {
  const {data, loading, error } = useFetch(url);
  console.log(data);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error || !data) {
    return <Text>Error loading Pokémon data</Text>;
  }

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text 
        style={styles.text} >{data.name}</Text>
        <Text style={styles.text}>#{data.id}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: data.sprites.other["official-artwork"].front_default,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 8,
    alignItems: "flex-start",
    width: 170,
    height: 120,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    margin: 8,
  },
  imageContainer: {
    position: "absolute",
    right: -25,
    top: 37,
    width: 100,
    height: 100,
  },
  image: {
    width: "90%",
    height: "90%",
  },
  textContainer: {
    flexDirection: "column",
    marginRight: 45,
    marginTop: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});