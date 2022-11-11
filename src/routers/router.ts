import express from "express";
import movieRouter from "./movieRouter";

const router = express.Router();

router.use(movieRouter);

export default router;
