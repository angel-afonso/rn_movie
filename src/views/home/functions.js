import Axios from 'axios';
import {useEffect, useState} from 'react';

export function useFetchMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(fetchMovie, [page]);

  function fetchMovie() {
    setLoading(true);
    Axios.get('list_movies.json', {
      params: {
        limit: 15,
        page,
      },
    }).then((result) => {
      setLoading(false);
      setMovies([...movies, ...(result?.data?.data?.movies ?? [])]);
    });
  }

  function nextPage() {
    if (loading) {
      return;
    }

    setPage(page + 1);
  }

  function restartPage() {
    setPage(1);
  }

  return [movies, loading, nextPage, restartPage];
}
