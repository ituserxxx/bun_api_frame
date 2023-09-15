import * as resp from "../middleware/respone_format"
import { routers } from "./v1"
export interface Router {
    pattern: string;
    method: (req: Request) => Promise<resp.resp_type>;
}

export async function router_init(req: Request): Promise<string> {
    const url = new URL(req.url);
    // url.pathname  http://localhost:3000/xxx  => /xxx
    // url.pathname  http://localhost:3000/xxx?a=123  => /xxx

    return JSON.stringify(await router_handler(String(url.pathname), req))
}

export async function router_handler(url_path: string, req: Request): Promise<resp.resp_type | null> {
  
    const matchedRouter = routers.find(router => router.pattern === url_path);
    if (matchedRouter) {
        console.log(url_path)
        return matchedRouter.method(req);
    }
    return null
}

