import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MoviesDetails";

export function App(){
    return(
        <div>
            <BrowserRouter>
                <header>
                    <h1 className={styles.title}>Disney Movies And Series</h1>
                    <Link to="/">
                        <h2 className={styles.title}>Movies</h2>
                    </Link>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<LandingPage />}> </Route>
                        <Route path="/movie/:movieId" element={<MovieDetails />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    )
}