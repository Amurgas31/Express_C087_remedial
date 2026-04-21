import express from "express";
import routesController from "../controllers/routesController.js";

const router = express.Router();

router.route("/")
.get(routesController.getRoutes)
.post(routesController.insertRoutes);

router.route("/:id") //Pide el id para saber que se va a actualizar o eliminar
.put(routesController.updateRoutes)
.delete(routesController.deleteRoutes);

export default router;