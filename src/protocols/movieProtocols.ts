export type movieProtocol = {
  name: string;
  streaming: string;
  genre: number;
  status: boolean;
  reviews: string;
};

export type updateMovieProtocol = {
  reviews: string;
  id: number;
};

export type listStreamings = {
  name: string;
  streaming: string;
  status: boolean;
  reviews: string;
  genre: string;
};

export type movieCount = {
  streaming: string;
  movies: Number;
};

export type body = Omit<movieCount, "movies">;

export type movieList = {
  id: number;
  name: string;
  streaming: string;
  genre: string;
  status: boolean;
  reviews: string;
};
