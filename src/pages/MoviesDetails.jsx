import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getById } from "../utils/movies.api";
import { Details } from "../components/Details";

export function MovieDetails() {
    const {movieId} = useParams();
    const [details, setDetails] = useState([]);

    useEffect( () => {
        getById("movie",movieId)
        .then((res) => setDetails(res));
    }, [movieId])

    if (!details) {
        return null;
    }

    return(
        <Details title={details.title} picture={details.picture} score={details.score} date={details.creation_date}
            type={details.Type} genres={details.Genres} characters={details.Characters} />
    )
}