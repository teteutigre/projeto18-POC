import express from "express";
import {
  countMovie,
  genreSelect,
  insertMovie,
  listMovie,
  movieDelete,
  movieUpdate,
  streamingsList,
} from "../Controllers/movieControllers";
import { validateSchema } from "../Middlewares/validateSchema";
import {
  insertMovieSchema,
  listMovieSchema,
  updateMovieSchema,
} from "../Schema/movieSchema";

const movieRouter = express.Router();
movieRouter.post("/movie", validateSchema(insertMovieSchema), insertMovie);
movieRouter.post(
  "/streamings",
  validateSchema(listMovieSchema),
  streamingsList
);
movieRouter.get("/delet/:id", movieDelete);
movieRouter.get("/streamings", countMovie);
movieRouter.get("/movie/genres/:id", genreSelect);
movieRouter.get("/movie", listMovie);
movieRouter.post("/reviews", validateSchema(updateMovieSchema), movieUpdate);

export default movieRouter;
