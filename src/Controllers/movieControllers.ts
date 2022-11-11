import { Request, Response } from "express";
import * as movieRepository from "../repository/movieRepository";

export async function insertMovie(req: Request, res: Response) {
  const movie = req.body;

  try {
    await movieRepository.movieInsert(movie);

    return res.status(201).send("created");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function movieList(req: Request, res: Response) {
  try {
    const { streaming } = req.body;

    const { rows: list } = await movieRepository.listMovie(streaming);

    return res.send(list);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
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

    return res.send();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
