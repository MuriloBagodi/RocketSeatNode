import http from "node:http";
import { routes } from "./src/middlewares/routes.js";
import { json } from "./src/middlewares/Json.js";
const server = http.createServer(async (req, res) => {
  const {method, url} = req

  await json(req,res)
  const route = routes.find((route) => {
    return route.method === method && route.path.test(url)
  });

  if(route){
    const routeParams = req.url.match(route.path)
    return route.handler(req, res)
  }

  res.writeHead(404).end()
});

server.listen(3333);
