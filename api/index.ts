import { Hono } from "hono";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};

export const runtime = "edge";
const app = new Hono().basePath("/api");

app.get("/", async (c) => {
  // random image from
  const picsum =
    "https://fastly.picsum.photos/id/548/200/300.jpg?hmac=dXVAc-s_U8QgoYUrMld43VmrOby1cluk-akWgxY6b9Y";

  const imageResource = (await fetch(picsum)).body;

  return c.newResponse(imageResource);
});

export default handle(app);
