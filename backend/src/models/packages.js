/*
    Campos:
        trackingNumber
        weight
        dimensions
        description
        senderId
        receiverId
        status
*/

import mongoose, { Schema, model } from "mongoose";

const packagesSchema = new Schema(
  {
    trackingNumber: {
      type: String,
    },
    weight: {
      type: String,
    },
    dimensions: {
      type: String,
    },
    description: {
      type: String,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
    },
    status: {
      type: String,
      enum: ["pending", "in_transit", "delivered"],
    },
  },
  {
    timestamps: true, // Guardar el momento exacto en el que se guardo y cuantas versiones tiene
    strict: false, // Para lograr agregar campos nuevos
  },
);

export default model("Packages", packagesSchema);
