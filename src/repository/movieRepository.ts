import { query } from "express";
import { QueryResult } from "pg";
import { connection } from "../Database/db";
import {
  movieProtocol,
  updateMovieProtocol,
  movieCount,
  listStreamings,
  movieList,
} from "../protocols/movieProtocols";

async function movieInsert(
  movie: movieProtocol
): Promise<QueryResult<movieProtocol>> {
  return connection.query(
    `
    INSERT INTO movie (name,streaming,status,reviews,"genreId") VALUES ($1,$2,$3,$4,$5); 
    `,
    [movie.name, movie.streaming, movie.status, movie.reviews, movie.genre]
  );
}

async function listStreamings(
  streaming: string
): Promise<QueryResult<listStreamings>> {
  return connection.query(
    `
  SELECT movie.name , movie.streaming , movie.status , movie.reviews ,genre.name AS genre FROM movie JOIN genre ON genre.id = movie."genreId" WHERE streaming = $1;`,
    [streaming]
  );
}

async function deleteMovie(id: number) {
  return connection.query(`DELETE FROM movie WHERE id = $1;`, [id]);
}

async function listMovieCount(): Promise<QueryResult<movieCount>> {
  return connection.query(`SELECT movie.streaming, count(movie.name) AS movies FROM movie GROUP BY movie.streaming
`);
}

async function updateMovie(movie: updateMovieProtocol) {
  return connection.query(
    `UPDATE movie SET status = true, reviews = $1 WHERE movie.id = $2`,
    [movie.reviews, movie.id]
  );
}

async function movieList(): Promise<QueryResult<movieList>> {
  return connection.query(`SELECT movie.id, movie.name, movie.streaming, genre.name AS genre, movie.status, 
	movie.reviews FROM movie JOIN genre ON movie."genreId" = genre.id;`);
}

export function selectGenre(
  genreId: number
): Promise<QueryResult<movieProtocol>> {
  return connection.query(
    `SELECT movie.id, movie.name, movie.streaming, genre.name AS genre, movie.status, movie.reviews 
    FROM movie JOIN genre ON movie."genreId" = genre.id WHERE genre.id=$1`,
    [genreId]
  );
}

export {
  movieInsert,
  listStreamings,
  deleteMovie,
  updateMovie,
  listMovieCount,
  movieList,
};
