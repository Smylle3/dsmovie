import MovieScore from "components/MovieScores";
import Pagination from "components/Pagination";
import "./styles.css";

function Listing() {
    return (
        <>
            <Pagination />
            <MovieScore />
        </>
    );
}

export default Listing;