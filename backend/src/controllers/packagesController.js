// Creo un array de métodos
const packagesController = {};

// Import el Schema de la colección que vamos a utilizar
import packagesModel from "../models/packages.js";

// SELECT
packagesController.getPackages = async (req, res) => {
    const packages = await packagesModel.find()
    res.json(packages)
};

// INSERT
packagesController.insertPackages = async (req, res) => {
    //#1 - Solicito lo datos a guardar
    const { trackingNumber,
        weight,
        dimensions,
        description,
        senderId,
        receiverId,
        status } = req.body;
    //#2 - Lleno una instancia de mí Schema
    const newPackage = new packagesModel({
        trackingNumber,
        weight,
        dimensions,
        description,
        senderId,
        receiverId,
        status
    })
    //#3 - Guardo en la base de datos
    await newPackage.save()

    res.json({ message: "Package Saved" })
};

// DELETE
packagesController.deletePackages = async (req, res) => {
    await packagesModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Package Deleted" });
};

// UPDATE
packagesController.updatePackages = async (req, res) => {
    //#1 - Pido los nuevos datos
    const { trackingNumber,
        weight,
        dimensions,
        description,
        senderId,
        receiverId,
        status } = req.body;
    //#2 - Actualizo los datos
    await packagesModel.findByIdAndUpdate(req.params.id, {
        trackingNumber,
        weight,
        dimensions,
        description,
        senderId,
        receiverId,
        status
    }, { new: true }); // Sintaxis para actualizar

    res.json({ message: "Package Updated" })
};

export default packagesController;