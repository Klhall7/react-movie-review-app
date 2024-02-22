/* eslint-disable react/prop-types */
import { useState } from 'react'

function InputForm({onInputChange}) {
    const [movieName, setMovieName] = useState('');

    function handleChange(event) {
        const { value } = event.target;
        setMovieName(value);
    }
    
    function handleRequest(event) {
        event.preventDefault();
        console.log('input return:', movieName)
        if (movieName) {
            onInputChange(movieName);
        }
    }

    

    return (
        <>
        <form onSubmit={handleRequest} >
            <label htmlFor='newMovieInput'>
                <input 
                type='text'
                id='newMovieInput'
                className='movie-input'
                placeholder='Enter movie name'
                value ={movieName}
                onChange={handleChange}
                />
            </label>
            <button 
                className='addMovie' 
                type="submit"
                >Add</button>
        </form>
        </>
    )
}

export default InputForm