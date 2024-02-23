/* eslint-disable react/prop-types */
import { useState } from "react";

function InputForm({ handleSubmit }) {
    const [movieName, setMovieName] = useState("");

    function handleChange(event) {
        const { value } = event.target;
        setMovieName(value);
    }

    function clearForm() {
        setMovieName("");
    }

    function handleRequest(event) {
        event.preventDefault();
        console.log("input return:", movieName);
        if (movieName) {
        handleSubmit(movieName);
        // onInputChange(movieName); //pass input to app
        clearForm(movieName); //clear after each input is rendered
        }
    }

    return (
        <>
        <form onSubmit={handleRequest}>
            <label htmlFor="newMovieInput">
            <input
                type="text"
                id="newMovieInput"
                className="movie-input"
                placeholder="Enter movie name"
                value={movieName}
                onChange={handleChange}
            />
            </label>
            <button
            className="addMovie"
            type="submit"
            style={{ borderRadius: "25px", marginLeft: "5px" }}
            >
            Add
            </button>
        </form>
        </>
    );
    }

export default InputForm;
