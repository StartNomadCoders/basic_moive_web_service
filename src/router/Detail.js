import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  const [loadings, setLoading] = useState(true);
  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      setLoading(false);
      setMovies(json.data.movie);
    } catch (error) {
      console.log('Error fetching movie:', error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loadings ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h2>{movies.title}</h2>
          <img src={movies.medium_cover_image} alt={movies.title} />
          <div>{movies.description_intro}</div>
        </div>
      )}
    </div>
  );
}

export default Detail;
