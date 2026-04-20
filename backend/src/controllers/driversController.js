import driversModel from "../models/drivers.js";

// Array de funciones
const driverController = {};

// SELECT
driverController.getDriver = async (req, res) => {
  try {
    const drivers = await driversModel.find();
    return res.status(200).json(drivers);
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// UPDATE
driverController.updateDriver = async (req, res) => {
  try {
    // 1- Solicitamos los nuevos datos
    let {
        name,
        lastName,
        licenseNumber,
        phone,
        email,
        password,
        isActive,
        isVerified,
        loginAttempts,
        timeOut,
    } = req.body;

    // Validaciones
    name = name?.trim();
    email = email?.trim();

    // Valores requeridos
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Fields required" });
    }

    const driverUpdated = await driversModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        lastName,
        licenseNumber,
        phone,
        email,
        password,
        isActive,
        isVerified,
        loginAttempts,
        timeOut,
      },
      { new: true },
    );

    if (!driverUpdated) {
      return res.status(404).json({ message: "Driver not found" });
    }

    return res.status(200).json({ message: "Driver Updated" });
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// DELETE
driverController.deleteDriver = async (res, req) => {
  try {
    const deleteDriver = driversModel.findByIdAndDelete(req.params.id);

    // Si no se elimina es por que no encontró el id
    if (!deleteDriver) {
      return res.status(404).json({ message: "Customer Not Found" });
    }

    return res.status(200).json({ message: "Customer Deleted" });
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default driverController;
