import { Hono } from "hono";
import { movies } from "../data";

const app = new Hono().post("/", async (c) => {
	const newMovie = await c.req.json();
	movies.push(newMovie);
	return c.json(movies);
});

export default app;
