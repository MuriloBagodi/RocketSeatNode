import { Database } from "./database";
const database = new Database()
export const routes = [
  {
    method: "GET",
    path: "/users",
    handler: (req, res) => {
      const users = database.select("users");

      return res.end(JSON.stringify(users))
    },
  },
  {
    method: "POST",
    path: "/users",
    handler: (req, res) => {
      const { nome, email } = req.body;

      const user ={
        nome,
        email,
        id: randomUUID(),
      };

      database.insert("users", user)

      res.writeHead(201).end();
    },
  },
];
