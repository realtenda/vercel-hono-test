import { Hono } from "hono";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.get("/", async (c) => {
  // random image from
  const picsum = "https://picsum.photos/200/300";

  const imageResource = (await fetch(picsum)).body;

  return c.newResponse(imageResource);
});

export default handle(app);
