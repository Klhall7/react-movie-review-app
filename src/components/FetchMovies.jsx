/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./movieCard.module.css";
import ReviewForm from "./ReviewForm";

function FetchMovies({ movieData }) {
console.log("data on card", { movieData });

const [compiledString, setCompiledString] = useState("");
const [showReviewForm, setShowReviewForm] = useState(false);

const handleCompiledStringChange = (compiled) => {
console.log("handle compiled string");
setCompiledString(compiled);
};

return (
    //module stylesheet is applied to each rendered movie info
    <div className={styles.root}>
      {movieData && movieData !== typeof "string" ? ( //check data object has values before render
        <>
        <div>
        <img src={movieData.Poster} alt={movieData.Title} />
        </div>
        <section>
        <h3>
            <strong>{movieData.Title}</strong>
        </h3>
        <p>
            {<strong>Released: </strong>} {movieData.Released}
        </p>
        <p>
            {<strong>Plot: </strong>}
            {movieData.Plot}
        </p>
        <div>
            <p>{<strong>Ratings: </strong>}</p>
            {movieData.Ratings ? ( //condition to check for ratings
            <ul>
                {movieData.Ratings.map((rating, index) => (
                <li key={index}>
                    {rating.Source}: {rating.Value}
                </li>
                ))}
            </ul>
            ) : (
            <p>No Ratings Available</p>
            )}
            <p style={{ whiteSpace: "pre-wrap" }}>{compiledString}</p>
        </div>
        </section>

        <div>
        <button
            onClick={() => setShowReviewForm(true)}
            type="button"
            className="addReview"
        >
            Leave a Review?
        </button>
        </div>
        {showReviewForm && (
        <div>
            <ReviewForm onCompiledStringChange={handleCompiledStringChange} />
        </div>
        )}
    </>
    ) : null}
</div>
);
}

export default FetchMovies;
