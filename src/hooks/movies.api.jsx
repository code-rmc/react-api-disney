import { useEffect, useState } from "react";

export function MovieApi() {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch("")
        .then((data) => data.json())
        .then((res)=> setMovies(res))
    }, []);

    return (
        movies
    )
}