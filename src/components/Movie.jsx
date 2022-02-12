import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

export function Movie({id, title, picture}) {
    return (
        <li className={styles.movieCard}>
            <Link to={"/movie/"+id} >
                <p>{title}</p>
                <img className={styles.movieImage} src={picture} alt={title} />
            </Link>
        </li>
    );
}