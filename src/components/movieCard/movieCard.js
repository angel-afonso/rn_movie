import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

/**
 * @typedef Movie
 * @prop {string} medium_cover_image
 *
 * @param {{movie}} props
 *
 */
export default function MovieCard({movie}) {
  return (
    <View style={styles.container}>
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
