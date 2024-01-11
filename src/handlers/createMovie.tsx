import { Hono } from "hono";
import { movies } from "../data";

const app = new Hono().post("/", (c) => {
	const movie = movies.push();
	return c.json(movie);
});

export default app;
