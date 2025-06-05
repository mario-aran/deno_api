import { Application, Router } from "oak/mod.ts";
import { SERVER_PORT } from "./config/env.ts";

const app = new Application();
const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello World!";
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server is running on port ${SERVER_PORT}`);
await app.listen({ port: SERVER_PORT });
