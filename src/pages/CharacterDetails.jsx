import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getCharacterById } from "../utils/movies.api"
import { Loading } from "../components/Loading";

export function CharacterDetails() {
    const {characterId} = useParams();
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        getCharacterById("character", characterId)
        .then( res => {
            setDetails(res);
            setIsLoading(false);
        });
    }, [characterId])

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <p><b>Name: </b>{details.name}</p>
            <p><b>Age: </b>{details.age}</p>
            <p><b>Weight: </b>{details.weight}</p>
            <p><b>History: </b>{details.history}</p>
            <p>{details.picture}</p>
            <p><b>Movies: </b>{details.Movies?.map(movie => {
                return <Link key={movie.id} to={"/movie/"+movie.id} >
                    {movie.title}
                </Link>
            })}
            </p>
        </div>
    )
}