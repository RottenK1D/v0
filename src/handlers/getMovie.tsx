import { Hono } from "hono";
import { movies } from "../data";

const app = new Hono().get("/:id", (c) => {
	const id: string = c.req.param("id");

	// Check if the movie exists in the array and return it
	for (let i = 0; i < movies.length; i++) {
		if (movies[i].ID === id) {
			return c.json(movies[i]);
		}
	}

	// Return a message to the user
	return c.text(`No movie with id ${id}`);
});

export default app;
