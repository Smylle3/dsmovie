import MovieScore from "components/MovieScores";
import { Movie } from "types/movie";
import "./styles.css";

type Props = {
    movie:Movie;
}

function MovieCard( { movie } : Props) {

    return (
        <div className="background">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <a href="/form/1" className="dsmovie-card-name">
                <div className="dsmovie-card-bottom-container">
                    <h3>{movie.title}</h3>
                    <MovieScore />
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </div>
            </a>
        </div >
    );
}

export default MovieCard;