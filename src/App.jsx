import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import { Search } from "./components/Search";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MoviesDetails";
import { CharacterDetails } from "./pages/CharacterDetails";

export function App(){
    return(
        <div>
            <Router>
                <header>
                    <h1 className={styles.title}>Disney Movies And Series</h1>
                    <Link to="/">
                        <h2 className={styles.title}>Movies</h2>
                    </Link>
                    <Search />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<LandingPage />}> </Route>
                        <Route path="/movie/:movieId" element={<MovieDetails />} />
                        <Route path="/character/:characterId" element={<CharacterDetails />} />
                    </Routes>
                </main>
            </Router>
        </div>
    )
}