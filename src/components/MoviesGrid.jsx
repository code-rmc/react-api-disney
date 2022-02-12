import { useEffect, useState } from "react";
import styles from "./MovieGrid.module.css";
import { getAll } from "../utils/movies.api";
import { Movie } from "./Movie";

export function MoviesGrid() {
    const [movies, setMovies] = useState([]);

    useEffect( ()=>{
        getAll("movie")
        .then((res)=> setMovies(res))
        .catch(err => console.error(err));
    }, []);

    return(
        <ul className={styles.movieGrid}>
            {movies.map( movie => {
                return <Movie key={movie.id} id={movie.id} title={movie.title} picture={movie.picture} />
            })}
        </ul>
    )
}