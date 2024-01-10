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

const app = new Hono();

app.get("/", getMovies);

export default app;
