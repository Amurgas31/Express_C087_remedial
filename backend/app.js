import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import customerRoutes from "./src/routes/customer.js";

// Creo una constante que guarde Express
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173/", "https://localhost:5174"],
    // permitir el envió de cookies y credenciales
    credentials: true,
  }),
);

app.use(cookieParser());

//IMPORTANTE: Que acepte los json desde postman
app.use(express.json());

app.use("/api/customer", customerRoutes);

export default app;