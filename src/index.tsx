import { Hono } from "hono";
import getMovies from "./handlers/getMovies";
import deleteMovie from "./handlers/deleteMovie";

const app = new Hono()
	.route("/movies", getMovies)
	.route("/movies/:id", deleteMovie);
// .get("/movies/:id", getMovie);
// .post("/movies", createMovie);
// .put("/movies/:id", updateMovie);

export default app;
