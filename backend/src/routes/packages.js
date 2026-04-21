import express from "express";
import packagesController from "../controllers/packagesController.js";

const router = express.Router();

router.route("/")
.get(packagesController.getPackages)
.post(packagesController.insertPackages);

router.route("/:id") //Pide el id para saber que se va a actualizar o eliminar
.put(packagesController.updatePackages)
.delete(packagesController.deletePackages);

export default router;