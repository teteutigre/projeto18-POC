import Joi from "joi";

export const insertMovieSchema = Joi.object({
  name: Joi.string().required(),
  streaming: Joi.string().required(),
  genre: Joi.number().required(),
  status: Joi.boolean().required(),
  reviews: Joi.string().required(),
});

export const updateMovieSchema = Joi.object({
  reviews: Joi.string().required(),
  id: Joi.number().required(),
});

export const listMovieSchema = Joi.object({
  streaming: Joi.string().required(),
});
