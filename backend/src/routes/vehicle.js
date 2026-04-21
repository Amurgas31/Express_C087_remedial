import express from "express";
import vehiclesController from "../controllers/vehiclesController.js";

const router = express.Router();

router.route("/")
.get(vehiclesController.getVehicles)
.post(vehiclesController.insertVehicles);

router.route("/:id") //Pide el id para saber que se va a actualizar o eliminar
.put(vehiclesController.updateVehicles)
.delete(vehiclesController.deleteVehicles);

export default router;