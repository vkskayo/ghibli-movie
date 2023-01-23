import express from "express";
import data from "./data.json" assert { type: "json" };
import cors from "cors";

const { films, peoples, locations, vehicles, species } = data;
const app = express();
app.listen(3002, () => {
  console.log("Listening on port 3002");
});
app.use(cors());

app.get("/films", (req, res) => {
  res.json(films);
});

app.get("/film/:id", (req, res) => {
  const id = req.params.id;
  const [film] = films.filter((film) => film.id === id);

  if (film) {
    res.json(film);
  } else {
    res.json({
      message: "Film wasn't found",
    });
  }
});
