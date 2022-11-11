export type movieProtocol = {
  id: number;
  name: string;
  streaming: string;
  genre: number;
  status: boolean;
  reviews?: string;
  genreId: number;
};

export type updateMovieProtocol = {
  reviews?: string;
  id: number;
};

export type listMovie = {
  streaming: string;
};
