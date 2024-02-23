/* eslint-disable react/prop-types */
import styles from "./movieCard.module.css";

function FetchMovies({ movieData }) {
    console.log({ movieData });

    function inputReview() {
        console.log('review started')
    }

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
                </div>
            </section>

            <div>
                <button onClick={inputReview}
                type= 'button'
                className="addReview">Leave a Review</button>
            </div>
            </>
        ) : null}
        </div>
    );
}

export default FetchMovies;
