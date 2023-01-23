import { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [film, setFilm] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/films")
      .then((res) => res.json())
      .then((data) => setFilm(data));
  }, []);
  const imgSize = {
    height: 300,
    width: 200,
  };

  return (
    <div className="App">
      <img
        className="mx-auto d-block p-4"
        src="https://upload.wikimedia.org/wikipedia/pt/thumb/f/f4/Studio_Ghibli_logo.png/270px-Studio_Ghibli_logo.png"
      />
      <div className="col-7 mx-auto d-flex flex-wrap gap-4 my-5 justify-content-around">
        {film.map((e) => {
          return (
            <Link to={`/film/${e.id}`}>
              <img className="hover-effect" style={imgSize} src={e.image} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default App;
