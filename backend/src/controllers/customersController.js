import customerModel from "../models/customers.js";

// Array de funciones
const customerController = {};

// SELECT
customerController.getCustomer = async (req, res) => {
  try {
    const customers = await customerModel.find();
    return res.status(200).json(customers);
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// UPDATE
customerController.updateCustomer = async (req, res) => {
  try {
    // 1- Solicitamos los nuevos datos
    let {
      name,
      lastName,
      email,
      password,
      phone,
      address,
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

    const customerUpdated = await customerModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        lastName,
        email,
        password,
        phone,
        address,
        isVerified,
        loginAttempts,
        timeOut,
      },
      { new: true },
    );

    if (!customerUpdated) {
      return res.status(404).json({ message: "Customer not found" });
    }

    return res.status(200).json({ message: "Customer Updated" });
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// DELETE
customerController.deleteCustomer = async (res, req) => {
  try {
    const deleteCustomer = customerModel.findByIdAndDelete(req.params.id);

    // Si no se elimina es por que no encontró el id
    if (!deleteCustomer) {
      return res.status(404).json({ message: "Customer Not Found" });
    }

    return res.status(200).json({ message: "Customer Deleted" });
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default customerController;
