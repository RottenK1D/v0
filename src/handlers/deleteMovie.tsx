import { Hono } from "hono";
import { movies } from "../data";

const app = new Hono().delete("/movies/:id", (c) => {
	const id: string = c.req.param("id");

	for (let i = 0; i < movies.length; i++) {
		if (movies[i].ID === id) {
			movies.splice(i, 1);
			break;
		}
	}

	return c.text(`Deleted movie with id ${id}`);
});

export default app;
