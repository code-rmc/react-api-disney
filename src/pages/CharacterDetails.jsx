import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCharacterById } from "../utils/movies.api"

export function CharacterDetails() {
    const {characterId} = useParams();
    const [details, setDetails] = useState([]);

    useEffect(()=>{
        getCharacterById("character", characterId)
        .then( res => setDetails(res));
    }, [characterId])

    return (
        <div>
            <p><b>Name: </b>{details.name}</p>
            <p><b>Age: </b>{details.age}</p>
            <p><b>Weight: </b>{details.weight}</p>
            <p><b>History: </b>{details.history}</p>
            <p>{details.picture}</p>
            <p><b>Movies: </b>{
                details.Movies ?
                    details.Movies.map(movie => movie.title)
                    : ""
            }
            </p>
        </div>
    )
}