import { useState } from "react";
import "./App.css";
import FetchMovies from "./components/FetchMovies";
import InputForm from "./components/InputForm";

function App() {
  const [movies, setMovies] = useState([]);

  const apiKey = "beb9c843";

  const fetchData = async (input) => {
    console.log({ input });
    const endpointUrl = `http://www.omdbapi.com/?t=${input}&apikey=${apiKey}`;
    const apiData = await fetch(endpointUrl).then((response) =>
      response.json()
    );
    console.log('fetch result', apiData);
    if (apiData.Response === "False") {
      window.alert(
        "Movie not found! :( It may not be available.\nPlease check your spacing and try again."
      );
      return;
    }
    console.log("Append above previous result and set to array");
    setMovies([apiData, ...movies]);
    console.log('previous array', { movies });
  };

  console.log('current array:', { movies });

  return (
    <>
      <div>
        <h1 style={{ color: "darkgrey" }}>
          {" "}
          <a href="https://www.omdbapi.com/">OMDB </a>
          Search A Film
        </h1>
      </div>

      <div className="form-title">
        <InputForm handleSubmit={fetchData} />
      </div>

      <div className="card">
        {movies.length
          ? movies.map((movie, index) => (
              <FetchMovies key={index} movieData={movie} />
            ))
          : null}
      </div>
    </>
  );
}

export default App;
