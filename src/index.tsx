import { Hono } from "hono";
import getMovies from "./handlers/getMovies";
import deleteMovie from "./handlers/deleteMovie";
import getMovie from "./handlers/getMovie";
import createMovie from "./handlers/createMovie";

const app = new Hono()
	.route("/movies", getMovies)
	.route("/movies/", deleteMovie)
	.route("/movies/", getMovie)
	.route("/movies", createMovie);
// .put("/movies/:id", updateMovie);

export default app;
