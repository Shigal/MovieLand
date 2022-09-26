import {useEffect, useState} from "react";

import './App.css'
import MovieCard from "./MovieCard";

// 9ebb34ff

const API_URL = "http://www.omdbapi.com?apikey=9ebb34ff";

const movie1 = {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Year": "2001",
    "imdbID": "tt0120737",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
};

const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('lord of the rings')
    }, []);

    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                placeholder="search for movies"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value)}}/>
                <img 
                // src={SearchIcon} 
                alt='search'
                onClick={() => {searchMovies(searchTerm)}}/>
            </div>

{
    movies.length > 0 ? (
        <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
            </div>
    ) : (
        <div className="empty">
            <h3>No movies found</h3>
        </div>
    )
}

        </div>
    );
}

export default App