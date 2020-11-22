import React from 'react';
import MovieCard from '../../components/movieCard/movieCard';
import {FlatList} from 'react-native-gesture-handler';
import {useFetchMovies} from './functions';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

export default function Home() {
  const [movies, loading, nextPage, restartPage] = useFetchMovies();

  function renderMovie({item}) {
    return <MovieCard key={item.id} movie={item} />;
  }

  function listFooter() {
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator animating size="large" color="#000000" />
      </View>
    ) : (
      false
    );
  }

  return (
    <FlatList
      data={movies}
      numColumns={3}
      onRefresh={restartPage}
      renderItem={renderMovie}
      onEndReached={nextPage}
      onEndReachedThreshold={0.5}
      ListFooterComponent={listFooter()}
    />
  );
}
