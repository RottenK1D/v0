import { Hono } from "hono";
import { movies } from "./data";
import { prettyJSON } from "hono/pretty-json";

const app = new Hono()
	.use("*", prettyJSON())
	.get("/", (c) => c.json({ movies }));

export default app;
