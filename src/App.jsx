import { useState } from 'react'
import './App.css'
import FetchMovies from './components/FetchMovies'
import InputForm from './components/InputForm'

function App() {
  const [movies, setMovies] = useState([]);

  const handleInputChange = (newMovie) => {
    const newArray = [newMovie, ...movies];
    setMovies(newArray)
  };


  return (
    <>
      <h1>Search A Film with OMDB</h1>
      <div>
      <InputForm onInputChange={handleInputChange}/>

      {!!movies.length && movies.map((title, index) => <FetchMovies key={index} newInput ={title} />)}
      
      </div>
    </>
  )
}

export default App
