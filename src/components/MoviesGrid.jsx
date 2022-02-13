import { useEffect, useState } from "react";
import styles from "./MovieGrid.module.css";
import { getAll } from "../utils/movies.api";
import { Movie } from "./Movie";
import { Loading } from "./Loading";

export function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=>{
        getAll("movie")
        .then((res)=> {
            setMovies(res);
            setLoading(false);
        })
        .catch(err => console.error(err));
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (!movies) {
        return <div>Ocurrio un Error grave.</div>
    }

    return(
        <ul className={styles.movieGrid}>
            {movies.map( movie => {
                return <Movie key={movie.id} {...movie} />
            })}
        </ul>
    )
}