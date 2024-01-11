import { Hono } from "hono";
import { movies } from "../data";

const app = new Hono().delete("/:id", (c) => {
	const id: string = c.req.param("id");

	// Check if the movie exists in the array and delete it
	for (let i = 0; i < movies.length; i++) {
		if (movies[i].ID === id) {
			movies.splice(i, 1);
			break;
		}
	}

	// Return a message to the user
	return c.text(`Deleted movie with id ${id}`);
});

export default app;
