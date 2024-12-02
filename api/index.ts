import { Hono } from "hono";
import { handle } from "hono/vercel";
import { fun } from "./imageGetter";

// export const config = {
//   runtime: "edge",
// };

const app = new Hono().basePath("/api");

app.get("/", async (c) => {
  return c.newResponse(await fun());
});

export default handle(app);
