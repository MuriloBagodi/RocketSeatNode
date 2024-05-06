import http from "node:http";

const server = http.createServer(async (req, res) => {
  const routes = routes.find(route => {
    return route.method === method && route.path
  })
});

server.listen(3333);
