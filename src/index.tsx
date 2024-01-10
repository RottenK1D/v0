import { Context, Hono } from "hono";

type Movie = {
	ID: string;
	Isbn: string;
	Title: string;
	Director: Director;
};

type Director = {
	Firstname: string;
	Lastname: string;
};

const movies: Movie[]

const app = new Hono()
  .get("/movies", getMovies);
  .get("/movies/:id", getMovie);
  .post("/movies", createMovie);
  .put("/movies/:id", updateMovie);
  .delete("/movies/:id", delteMovie);

export default app;
