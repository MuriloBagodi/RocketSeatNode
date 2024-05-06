import { randomUUID } from "node:crypto";
import { json } from "./src/middlewares/Json.js";
import http from "node:http";

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === "GET" && url === "/users") {
    return res.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { nome, email } = req.body;
    users.push({
      nome,
      email,
      id: randomUUID()
    });
    res.writeHead(201).end();
  }
});

server.listen(3333);
