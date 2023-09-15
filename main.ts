import { router_init } from "./router/handler";
import { load_db } from "./mysql/init";

load_db()

const server = Bun.serve({
  port: 3000,
  fetch: async (req: Request) => {
    return new Response(await router_init(req));
  },
});
console.log("listen post is "+server.port)