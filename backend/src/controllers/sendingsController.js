// Creo un array de métodos
const sendingsController = {};

// Import el Schema de la colección que vamos a utilizar
import sendingModel from "../models/sendings.js";

// SELECT
sendingsController.getSendings = async (req, res) => {
    const sendings = await sendingModel.find()
    res.json(sendings)
};

// INSERT
sendingsController.insertSendings = async (req, res) => {
    //#1 - Solicito lo datos a guardar
    const { packageId,
        routeId,
        driverId,
        vehicleId,
        departureDate,
        deliveryDate,
        status } = req.body;
    //#2 - Lleno una instancia de mí Schema
    const newSending = new sendingModel({
        packageId,
        routeId,
        driverId,
        vehicleId,
        departureDate,
        deliveryDate,
        status
    })
    //#3 - Guardo en la base de datos
    await newSending.save()

    res.json({ message: "Sending Saved" })
};


// DELETE
sendingsController.deleteSendings = async (req, res) => {
    await sendingModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Sending Deleted" });
};

// UPDATE
sendingsController.updateSendings = async (req, res) => {
    //#1 - Pido los nuevos datos
    const { packageId,
        routeId,
        driverId,
        vehicleId,
        departureDate,
        deliveryDate,
        status } = req.body;
    //#2 - Actualizo los datos
    await sendingModel.findByIdAndUpdate(req.params.id, {
        packageId,
        routeId,
        driverId,
        vehicleId,
        departureDate,
        deliveryDate,
        status
    }, { new: true }); // Sintaxis para actualizar

    res.json({ message: "Sending Updated" })
};

export default sendingsController;