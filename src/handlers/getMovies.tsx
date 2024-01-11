import { Hono } from "hono";
import { movies } from "../data";

const app = new Hono().get("/", (c) => c.json({ movies }));

export default app;
