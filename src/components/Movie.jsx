import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

export function Movie({id, title, picture}) {
    const ruteImage = `https://image.tmdb.org/t/p/w300${picture}`;

    return (
        <li className={styles.movieCard}>
            <Link to={"/movie/"+id} >
                <p>{title}</p>
                <img className={styles.movieImage} src={ruteImage} alt={title} />
            </Link>
        </li>
    );
}