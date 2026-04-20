import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import customerRoutes from "./src/routes/customer.js";
import registerCustomerRoutes from "./src/routes/registerCustomer.js";
import driverRoutes from "./src/routes/drivers.js";
import registerDriverRoutes from "./src/routes/registerDriver.js";

// Creo una constante que guarde Express
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173/", "https://localhost:5174"],
    // permitir el envió de cookies y credenciales
    credentials: true,
  })
);

app.use(cookieParser());

//IMPORTANTE: Que acepte los json desde postman
app.use(express.json());

app.use("/api/customer", customerRoutes);
app.use("/api/registerCustomer", registerCustomerRoutes);
app.use("/api/driver", driverRoutes);
app.use("/api/registerDriver", registerDriverRoutes);

export default app;
