import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getById } from "../utils/movies.api";
import { Details } from "../components/Details";
import { Loading } from "../components/Loading";

export function MovieDetails() {
    const {movieId} = useParams();
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        getById("movie",movieId)
        .then((res) => {
            setDetails(res);
            setIsLoading(false);
        });
    }, [movieId])

    if (isLoading) {
        return <Loading />;
    }

    if (!details) {
        return null;
    }

    return <Details {...details} />
}