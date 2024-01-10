import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import getMovies from "./getMovies";

const app = new Hono().use("*", prettyJSON()).route("/movies", getMovies);
// .get("/movies/:id", getMovie);
// .post("/movies", createMovie);
// .put("/movies/:id", updateMovie);
// .delete("/movies/:id", delteMovie);

export default app;
