import { Hono } from "hono";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};
import { get } from "@vercel/edge-config";

// export const runtime = "nodejs";
const app = new Hono().basePath("/api");

app.get("/", async (c) => {
  const x = await get("greeting");

  console.log(x);
  // // random image from
  // const picsum =
  //   "https://fastly.picsum.photos/id/548/200/300.jpg?hmac=dXVAc-s_U8QgoYUrMld43VmrOby1cluk-akWgxY6b9Y";

  // const imageResource = (await fetch(picsum)).body;

  return c.json({
    message: x,
  });
});

export default handle(app);
