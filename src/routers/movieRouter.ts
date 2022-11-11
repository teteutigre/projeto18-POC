import express from "express";
import {
  countMovie,
  insertMovie,
  movieDelete,
  movieList,
} from "../Controllers/movieControllers";
import { validateSchema } from "../Middlewares/validateSchema";
import { insertMovieSchema, listMovieSchema } from "../Schema/movieSchema";

const movieRouter = express.Router();

movieRouter.get("/movie", validateSchema(insertMovieSchema), insertMovie);

movieRouter.post("/list", validateSchema(listMovieSchema), movieList);

movieRouter.post("delet/:id", movieDelete);

movieRouter.get("/list", countMovie);

export default movieRouter;
