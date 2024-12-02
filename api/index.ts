import { Hono } from "hono";
import { handle } from "hono/vercel";
import sharp from "sharp";

// export const config = {
//   runtime: "edge",
// };

export const runtime = "nodejs";

// export const pictureFetcher = async () => {
//   const picture = await fetch("https://picsum.photos/200/300");
//   // console.log(picture);

//   return picture;
// };

// export const fun = async () => {
//   const img = await (await pictureFetcher()).arrayBuffer();

//   const imgBuffer = sharp(img).rotate(40).toBuffer();

//   return await imgBuffer;
// };

const app = new Hono().basePath("/api");

app.get("/", async (c) => {
  console.log("dasdasdasdasdasdasd");
  return c.json({ hello: "world" });
});

export default handle(app);
