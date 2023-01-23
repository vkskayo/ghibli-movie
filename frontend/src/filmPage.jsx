import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/* 
 film.

 "title": "Castle in the Sky",
  "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
  "movie_banner": "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
  "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata",
  "release_date": "1986",
  "rt_score": "95",
*/

function FilmPage() {
  const imgSizeDesk = {
    height: 450,
    width: 300,
  };

  const imgSizeMobi = {
    height: 300,
    width: 200,
  };

  const [film, setFilm] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    fetch(`http://localhost:3002/film/${id}`)
      .then((res) => res.json())
      .then((data) => setFilm(data));
  }, []);
  console.log(film);
  return (
    <div className="App">
      <div className="position-relative">
        <img className="col-12 banner mb-5" src={film.movie_banner} />
        <div className="position-absolute translate-middle-y top-100 start-0 mx-lg-5 mx-auto d-lg-block d-none">
          <div className="d-flex align-items-end">
            <div>
              <img style={imgSizeDesk} src={film.image} />
              <h2 className="text-center mt-2">
                Rating: <span className="text-primary">{film.rt_score}</span>
              </h2>
            </div>
            <div className="d-flex flex-column align-items-start p-4 mb-4">
              <div className="d-flex gap-5">
                <h2 className="fw-bolder">{film.title}</h2>
                <h3 className="text-secondary">{film.release_date}</h3>
              </div>

              <p className="my-2 fs-4">{film.description}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="d-flex flex-column">
            <div className="position-absolute top-100 start-50 translate-middle d-lg-none d-block">
              <img style={imgSizeMobi} src={film.image} />
              <h2 className="text-center">
                Rating: <span className="text-primary">{film.rt_score}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmPage;
