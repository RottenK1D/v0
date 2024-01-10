import { Hono } from "hono";
import getMovies from "./getMovies";

const app = new Hono().route("/movies", getMovies);
// .get("/movies/:id", getMovie);
// .post("/movies", createMovie);
// .put("/movies/:id", updateMovie);
// .delete("/movies/:id", delteMovie);

export default app;
