import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	// Group movies into chunks of 3
	const groupedMovies = [];
	for (let i = 0; i < props.movies.length; i += 3) {
		groupedMovies.push(props.movies.slice(i, i + 3));
	}

	return (
		<>
			{groupedMovies.map((moviesChunk, index) => (
				<div className='row' key={index}>
					{moviesChunk.map((movie) => (
						<div className='col-md-4' key={movie.imdbID}>
							<div className='image-container d-flex justify-content-start m-3'>
								<img src={movie.Poster} alt='movie'></img>
								<div
									onClick={() => props.handleFavouritesClick(movie)}
									className='overlay d-flex align-items-center justify-content-center'
								>
									<FavouriteComponent />
								</div>
							</div>
						</div>
					))}
				</div>
			))}
		</>
	);
};

export default MovieList;
