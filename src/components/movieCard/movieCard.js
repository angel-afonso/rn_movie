import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {useGoToDetails} from './functions';
/**
 * @typedef Movie
 * @prop {string} medium_cover_image
 * @prop {string} title
 *
 * @param {{movie}} props
 *
 */
export default function MovieCard({movie}) {
  const goToDetails = useGoToDetails(movie.id);

  return (
    <Pressable style={styles.container} onPress={goToDetails}>
      <Image
        source={{
          uri: movie.medium_cover_image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.title}</Text>
    </Pressable>
  );
}
