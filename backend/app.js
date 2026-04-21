import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import customerRoutes from "./src/routes/customer.js";
import registerCustomerRoutes from "./src/routes/registerCustomer.js";
import driverRoutes from "./src/routes/drivers.js";
import registerDriverRoutes from "./src/routes/registerDriver.js";
import loginCustomerRoutes from "./src/routes/loginCustomer.js";
import logoutRoutes from "./src/routes/logout.js";
import loginDriverRoutes from "./src/routes/loginDriver.js";
import packagesRoutes from "./src/routes/packages.js";
import vehiclesRoutes from "./src/routes/vehicle.js";
import routesRoutes from "./src/routes/routes.js";
import sendingsRoutes from "./src/routes/sending.js";

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
app.use("/api/loginCustomer", loginCustomerRoutes);
app.use("/api/loginDriver", loginDriverRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/packages", packagesRoutes);
app.use("/api/vehicles", vehiclesRoutes);
app.use("/api/routes", routesRoutes);
app.use("/api/sendings", sendingsRoutes);

export default app;
