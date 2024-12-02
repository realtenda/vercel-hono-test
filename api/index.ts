import { Hono } from "hono";
import { handle } from "hono/vercel";
import sharp from "sharp";

export const runtime = "nodejs";

const app = new Hono().basePath("/api");

const pictureFetcher = async () => {
  const picture = await fetch("https://picsum.photos/200/300");
  // console.log(picture);

  return picture;
};

export const fun = async () => {
  const img = await (await pictureFetcher()).arrayBuffer();

  const imgBuffer = sharp(img).rotate(40).toBuffer();

  //testing 1 2
  return await imgBuffer;
};

app.get("/hello", async (c) => {
  return c.newResponse(await fun());
});

export const GET = handle(app);
export const POST = handle(app);
