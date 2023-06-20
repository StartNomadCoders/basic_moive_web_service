import Movie from 'components/jsx/Movie';
import { useEffect, useState } from 'react';
import Detail from 'router/Detail';
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
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Detail />
          {movies.map((v) => (
            <Movie
              key={v.id}
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