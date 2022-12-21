import { useState, useEffect } from 'react';
import classes from './App.module.css';

import Input from './components/Input';
import MovieList from './components/MovieList';

const API_URL = ' https://www.omdbapi.com/?i=tt3896198&apikey=7f938ff';
const App = () => {
	const [movies, setMovies] = useState([]);

	const [search, setSearch] = useState('');

	const searchMovieHandler = (e) => {
		setSearch(e.target.value);
	};
	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies("");
	}, []);

	const findMovies=()=>{
		searchMovies(search)
	}
	console.log(movies);
	return (
		<div className={classes.app}>
			<h1>Search Your Movie</h1>
			<Input
				onSearch={searchMovieHandler}
				search={search}
				onSearchForMovie={findMovies}
			/>

			{movies?.length > 0 ? (
				<MovieList movies={movies} />
			) : (
				<div className={classes.empty}>
					<h2> No movies found</h2>
				</div>
			)}
		</div>
	);
};
export default App;
