import Movie from 'components/jsx/Movie';
import { useEffect, useState } from 'react';
import styles from 'router/Home.module.css';
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((v) => (
            <Movie
              key={v.id}
              id={v.id}
              year={v.year}
              coverImage={v.medium_cover_image}
              title={v.title}
              summary={v.summary}
              genres={v.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
