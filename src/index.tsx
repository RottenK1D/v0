import { Hono } from "hono";
import getMovies from "./handlers/getMovies";
import deleteMovie from "./handlers/deleteMovie";
import getMovie from "./handlers/getMovie";
import createMovie from "./handlers/createMovie";
import updateMovie from "./handlers/updateMovie";

const app = new Hono()
	.route("/movies", getMovies)
	.route("/movies/", deleteMovie)
	.route("/movies/", getMovie)
	.route("/movies", createMovie)
	.route("/movies/", updateMovie);

export default app;
