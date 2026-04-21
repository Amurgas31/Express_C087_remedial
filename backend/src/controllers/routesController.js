// Creo un array de métodos
const routesController = {};

// Import el Schema de la colección que vamos a utilizar
import routesModel from "../models/routes.js";

// SELECT
routesController.getRoutes = async (req, res) => {
    const routes = await routesModel.find()
    res.json(routes)
};

// INSERT
routesController.insertRoutes = async (req, res) => {
    //#1 - Solicito lo datos a guardar
    const { origin,
        destination,
        distance,
        estimatedTime } = req.body;
    //#2 - Lleno una instancia de mí Schema
    const newRoute = new routesModel({
        origin,
        destination,
        distance,
        estimatedTime
    })
    //#3 - Guardo en la base de datos
    await newRoute.save()

    res.json({ message: "Route Saved" })
};


// DELETE
routesController.deleteRoutes = async (req, res) => {
    await routesModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Route Deleted" });
};

// UPDATE
routesController.updateRoutes = async (req, res) => {
    //#1 - Pido los nuevos datos
    const { origin,
        destination,
        distance,
        estimatedTime} = req.body;
    //#2 - Actualizo los datos
    await routesModel.findByIdAndUpdate(req.params.id, {
        origin,
        destination,
        distance,
        estimatedTime
    }, { new: true }); // Sintaxis para actualizar

    res.json({ message: "Route Updated" })
};

export default routesController;