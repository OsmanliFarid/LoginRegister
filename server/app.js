import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { RegisterAll, RegisterCreate } from "./Controller/Register.js";
import { RegisterMiddleware } from "./Middleware/Register.js";
import { LoginMiddleware } from "./Middleware/Login.js";
import { LoginController } from "./Controller/Login.js";
import bodyParser from "body-parser";
const app = express();
dotenv.config();
const Port = process.env.URL_PORT;

app.use(cors());
app.use(bodyParser.json());
app.listen(Port, () => {
  console.log(`Server http://localhost:${Port} ünvanında işləyir`);
});
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log(" Mongo qoşuldu"))
  .catch((err) => console.log(" Mongo xətası:", err));

//post
app.post("/api/v1/register", RegisterMiddleware, RegisterCreate);
app.post("/api/v1/login", LoginMiddleware, LoginController);

//get

app.get("/api/v1/register", RegisterAll);

// delete

// put
