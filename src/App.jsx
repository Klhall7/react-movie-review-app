import { useState } from 'react'
import './App.css'
import FetchMovies from './components/FetchMovies'
import InputForm from './components/InputForm'

function App() {
  const [movies, setMovies] = useState('');

  const handleInputChange = (newMovie) => {
    setMovies(newMovie)
  };


  return (
    <>
      <h1>Search A Film with OMDB</h1>
      <div>
      <InputForm onInputChange={handleInputChange}/>
      <FetchMovies newInput ={movies} />
      </div>
    </>
  )
}

export default App
