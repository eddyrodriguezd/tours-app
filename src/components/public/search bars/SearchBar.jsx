import './SearchBar.css';

const SearchBar = ({ searchValue }) => (
	<div className='destination-header-top'>
		<input
			type='text'
			name='destination'
			id='destination_textbox'
			autoComplete='off'
			placeholder='Destino'
			onChange={(event) => {
				searchValue(event.target.value);
			}}
		/>
	</div>
);

export default SearchBar;
