import { connection } from "../Database/db";
import {
  movieProtocol,
  updateMovieProtocol,
} from "../protocols/movieProtocols";
import { QueryResult } from "pg";

async function movieInsert(movie: movieProtocol): Promise<QueryResult<any>> {
  connection.query(
    `
    INSERT INTO movie (name,streaming,status,reviews,"genreId") VALUES ($1,$2,$3,$4,$5); 
    `,
    [movie.name, movie.streaming, movie.status, movie.reviews, movie.genre]
  );
}

async function listMovie(streaming: string) {
  return connection.query(
    `
  SELECT movie.name , movie.streaming , movie.status , movie.reviews ,genre.name AS genre FROM movie JOIN genre ON genre.id = movie."genreId" WHERE streaming = $1;`,
    [streaming]
  );
}

async function deleteMovie(id: number) {
  connection.query(`DELETE FROM movie WHERE id = $1;`, [id]);
}

async function listMovieCount() {
  return connection.query(`SELECT movie.streaming, count(movie.name) AS movies FROM movie GROUP BY movie.streaming
`);
}

async function updateMovie(movie: updateMovieProtocol) {
  connection.query(
    `UPDATE movie SET status = true, reviews = $1 WHERE id = $2`,
    [movie.reviews, movie.id]
  );
}

export { movieInsert, listMovie, deleteMovie, updateMovie, listMovieCount };
