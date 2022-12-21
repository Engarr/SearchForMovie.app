import classes from './MovieList.module.css';
import Movie from './Movie';

const MovieList = (props) => {
	const listMovies = props.movies.map((movie) => (
		<Movie
			key={movie.imdbID}
			year={movie.Year}
			poster={movie.Poster}
			type={movie.Type}
			title={movie.Title}
		/>
	));

	return <div className={classes.container}>{listMovies}</div>;
};
export default MovieList;
