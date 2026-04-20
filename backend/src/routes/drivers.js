import express from "express";
import driverController from "../controllers/driversController.js";

// Usamos Router() de la libreria express para definir los métodos HTTP a utilizar
const router = express.Router();

router.route("/")
    .get(driverController.getDriver);

router.route("/:id")
    .put(driverController.updateDriver)
    .delete(driverController.deleteDriver);

export default router;