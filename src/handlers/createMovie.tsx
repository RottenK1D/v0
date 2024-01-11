import { Hono } from "hono";
import { movies, Movie } from "../data";

const app = new Hono().post("/", async (c) => {
	const newMovie = (await c.req.json()) as Partial<Movie>;

	//runtime validation
	if (
		!newMovie.ID ||
		typeof newMovie.ID !== "string" ||
		!newMovie.Isbn ||
		typeof newMovie.Isbn !== "string" ||
		!newMovie.Title ||
		typeof newMovie.Title !== "string" ||
		!newMovie.Director ||
		typeof newMovie.Director.Firstname !== "string" ||
		typeof newMovie.Director.Lastname !== "string"
	) {
		return c.json({ error: "Invalid movie data" }, 400);
	}

	// Check for duplicate ID
	if (movies.find((movie) => movie.ID === newMovie.ID)) {
		return c.json({ error: "Movie already exists" }, 400);
	}

	// Add the new movie to the movies array
	movies.push(newMovie as Movie);

	// Return the updated movies array as JSON
	return c.json(movies);
});

export default app;
