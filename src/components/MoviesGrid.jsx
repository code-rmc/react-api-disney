import { useEffect, useState } from "react";
import styles from "./MovieGrid.module.css";
import moviesAPI from "./moviesAPI.json";
import { Movie } from "./Movie";

export function MoviesGrid() {
    const [movies, setMovies] = useState([]);

    useEffect( ()=>{
        fetch("https://challenge-alkemy-rmc.herokuapp.com/api/character", {
        Accept:	'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Encoding':	'gzip, deflate, br',
        'Accept-Language': 'es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3',
        Connection:	'keep-alive',
        Host:	'challenge-alkemy-rmc.herokuapp.com',
    
        method: 'GET',
            mode: 'no-cors',
            // Vary: '*',
            // 'Cache-Control': 'public',
            // Allow:'GET',
            // headers:{
            //     'Access-Control-Allow-Origin':'*'
            // },
        })
        .then((data) => {
            console.log({data});
            data.json()})
        .then((res)=> {
            console.log("RES "+res);
            setMovies(res);
        })
        .catch(err => console.log(err));
    }, []);

    console.log(movies);

    return(
        <ul className={styles.movieGrid}>
            {moviesAPI.map( movie => {
                return <Movie key={movie.id} id={movie.id} title={movie.title} picture={movie.picture} />
            })}
        </ul>
    )
}