import SearchIcon from '../search.svg';
import classes from './Input.module.css';

const Input = (props) => {
	

	return (
		<div className={classes.search}>
			<input
				placeholder='Search for movies'
				value={props.search}
				onChange={props.onSearch}
			/>
			<img src={SearchIcon} alt='search' onClick={props.onSearchForMovie} />
		</div>
	);
};
export default Input;
