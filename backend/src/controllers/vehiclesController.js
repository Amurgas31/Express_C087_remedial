// Creo un array de métodos
const vehiclesController = {};

// Import el Schema de la colección que vamos a utilizar
import vehiclesModel from "../models/vehicles.js";

// SELECT
vehiclesController.getVehicles = async (req, res) => {
    const vehicles = await vehiclesModel.find()
    res.json(vehicles)
};

// INSERT
vehiclesController.insertVehicles = async (req, res) => {
    //#1 - Solicito lo datos a guardar
    const { plate,
        model,
        capacity,
        status,
        driverId } = req.body;
    //#2 - Lleno una instancia de mí Schema
    const newVehicle = new vehiclesModel({
        plate,
        model,
        capacity,
        status,
        driverId
    })
    //#3 - Guardo en la base de datos
    await newVehicle.save()

    res.json({ message: "Vehicle Saved" })
};


// DELETE
vehiclesController.deleteVehicles = async (req, res) => {
    await vehiclesModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Vehicle Deleted" });
};

// UPDATE
vehiclesController.updateVehicles = async (req, res) => {
    //#1 - Pido los nuevos datos
    const { plate,
        model,
        capacity,
        status,
        driverId } = req.body;
    //#2 - Actualizo los datos
    await vehiclesModel.findByIdAndUpdate(req.params.id, {
        plate,
        model,
        capacity,
        status,
        driverId
    }, { new: true }); // Sintaxis para actualizar

    res.json({ message: "Vehicle Updated" })
};

export default vehiclesController;