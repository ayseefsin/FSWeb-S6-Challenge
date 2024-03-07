import React, { useEffect, useState } from "react";
import { Karakter } from "./components/Karakter";
import axios from "axios";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPeople = () => {
    return axios.get("https://swapi.dev/api/people/");
  };
  const fetchMovie = () => {
    return axios.get("https://swapi.dev/api/films/");
  };

  useEffect(() => {
    Promise.all([fetchPeople(), fetchMovie()]).then((values) => {
      setLoading(false);
      console.log(values[1].data[0].results);
      setCharacters(values[0].data);
      setMovies(values[1].data[0].results);
    });
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className="text-[5vw] text-[white] mt-[5vw] font-bold ">
            Karakterler
          </h1>
          {characters.map((char) => {
            return <Karakter char={char} movies={movies} />;
          })}
        </>
      )}
      ;
    </div>
  );
};

export default App;
