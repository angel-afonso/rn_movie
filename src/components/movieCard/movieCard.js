import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

/**
 * @typedef Movie
 * @prop {string} medium_cover_image
 * @prop {string} title
 *
 * @param {{movie}} props
 *
 */
export default function MovieCard({movie, onPress}) {
  function onPressCard() {
    onPress(movie);
  }

  return (
    <View style={styles.container} onPress={onPressCard}>
      <Image
        source={{
          uri: movie.medium_cover_image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.title}</Text>
    </View>
  );
}
