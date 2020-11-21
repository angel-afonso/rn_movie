import Axios from 'axios';
import {useEffect, useState} from 'react';

export function useFetchMovieDetails(id) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(fetchMovie, [id]);

  function fetchMovie() {
    setLoading(true);
    Axios.get('movie_details.json', {
      params: {
        movie_id: id,
      },
    }).then((result) => {
      setLoading(false);
      setMovie(result?.data?.data?.movie);
    });
  }

  return [movie, loading];
}
