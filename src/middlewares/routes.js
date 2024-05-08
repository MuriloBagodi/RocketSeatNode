import { buildRoutePath } from "../build/build-route-path.js";
import { Database } from "./database.js";
import { randomUUID } from "node:crypto";
const database = new Database();
export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/users"),
    handler: (req, res) => {
      const users = database.select("users");

      return res.end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/users"),
    handler: (req, res) => {
      const { nome, email } = req.body;

      const user = {
        nome,
        email,
        id: randomUUID(),
      };

      database.insert("users", user);

      res.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/users/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      database.delete("users", id);
      return res.end();
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/users/:id"),
    handler: (req, res) => {
      const { id } = req.params;
      const {nome, email} = req.body


      database.update("users", id, {nome, email});
      return res.end();
    },
  },
];
