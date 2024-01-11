import { Hono } from "hono";
import { movies } from "../data";

const app = new Hono().get("/:id", (c) => {
	const id: string = c.req.param("id");

	for (let i = 0; i < movies.length; i++) {
		if (movies[i].ID === id) {
			return c.json(movies[i]);
		}
	}

	return c.text(`No movie with id ${id}`);
});

export default app;
