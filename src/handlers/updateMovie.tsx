import { Hono } from "hono";
import { movies, Movie } from "../data";

const app = new Hono().post("/:id", async (c) => {
	const id: string = c.req.param("id");
	const updatedMovie = (await c.req.json()) as Partial<Movie>;

	let movieFound = false;

	for (let i = 0; i < movies.length; i++) {
		if (movies[i].ID === id) {
			movies[i] = { ...movies[i], ...updatedMovie };
			movieFound = true;
			break;
		}
	}

	if (!movieFound) {
		return c.json({ error: "Movie not found" }, 404);
	}
	return c.json({
		message: "Movie updated successfully",
		movie: movies.find((m) => m.ID === id),
	});
});

export default app;
