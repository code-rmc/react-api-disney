import { Link } from "react-router-dom";
import styles from "./Details.module.css";

export function Details({title, picture, score, creation_date: date, Type: type, Genres: genres, Characters: characters}) {
    return (
        <div className={styles.container}>
            <div className={styles.movieDetail +" "+ styles.movieHeader}>
                <div>
                    <h1>{title}</h1>
                    <p><b>Genre</b>:
                    {genres?.map((genre, index) => {
                        return <span key={index}> {genre.genre}</span>
                    })}
                    </p>
                </div>
                <p><b>Score</b>: {score}/5</p>
            </div>
            <div  className={styles.movieDetail +" "+ styles.bodyMovie}>
                <img src={picture} alt={title} />
                <div className={styles.details}>
                    <h3>About the Movie </h3>
                    <p><b>Creation Date:</b> {date}</p>
                    <p><b>Type:</b> {type?.type}</p>
                    <p><b>Characters:</b> </p>
                        {characters?.map(character => {
                            return (
                                <Link key={character.id} to={"/character/"+character.id}>
                                    <p>{character.name}</p>
                                </Link>
                            )
                        })}
                </div>
            </div>
        </div>
    );
}