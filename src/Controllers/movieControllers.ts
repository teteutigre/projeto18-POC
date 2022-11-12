import { Request, Response } from "express";
import * as movieRepository from "../repository/movieRepository";
import {
  body,
  movieProtocol,
  updateMovieProtocol,
} from "../protocols/movieProtocols";

export async function insertMovie(req: Request, res: Response) {
  try {
    const movie = req.body as movieProtocol;

    await movieRepository.movieInsert(movie);

    return res.status(201).send("created");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function streamingsList(req: Request, res: Response) {
  try {
    const { streaming } = req.body as body;

    const { rows: list } = await movieRepository.listStreamings(streaming);

    return res.send(list);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function listMovie(req: Request, res: Response) {
  try {
    const { rows: movies } = await movieRepository.movieList();
    return res.send(movies);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function countMovie(req: Request, res: Response) {
  try {
    const { rows: list } = await movieRepository.listMovieCount();

    return res.send(list);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function movieDelete(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await movieRepository.deleteMovie(Number(id));

    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function genreSelect(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { rows: movies } = await movieRepository.selectGenre(Number(id));
    console.log(movies);
    return res.send(movies);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function movieUpdate(req: Request, res: Response) {
  try {
    const reviews = req.body as updateMovieProtocol;
    await movieRepository.updateMovie(reviews);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
