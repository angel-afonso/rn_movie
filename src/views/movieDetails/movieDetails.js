import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useFetchMovieDetails} from './functions';
import styles from './styles';

export default function MovieDetails({
  route: {
    params: {id},
  },
}) {
  const [movie, loading] = useFetchMovieDetails(id);

  return loading ? (
    <View>
      <ActivityIndicator animating size="large" color="#000000" />
    </View>
  ) : (
    <ImageBackground
      style={styles.backgroundImage}
      source={{uri: movie.background_image_original}}>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.cover} source={{uri: movie.large_cover_image}} />
          <View style={styles.movieInfo}>
            <Text style={styles.title}>{movie.title_long}</Text>
            <Text style={styles.description}>{movie.description_full}</Text>
            <Text style={styles.rating}>Rating: {movie.rating}</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
