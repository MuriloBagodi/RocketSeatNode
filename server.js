import { json } from "./src/middlewares/Json";
import http from "node:http"

const users = []

const server = http.createServer(async(req,res)=>{
    const {method, url} =req
})