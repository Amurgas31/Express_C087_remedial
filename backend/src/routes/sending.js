import express from "express";
import sendingController from "../controllers/sendingsController.js";

const router = express.Router();

router.route("/")
.get(sendingController.getSendings)
.post(sendingController.insertSendings);

router.route("/:id")
.put(sendingController.updateSendings)
.delete(sendingController.deleteSendings);

export default router;