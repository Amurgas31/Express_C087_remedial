/*
    Campos:
        name
        lastName
        licenseNumber
        phone
        email
        password
        isActive
        isVerified
        loginAttempts
        timeOut
*/

import mongoose, { Schema, model } from "mongoose";

const driversSchema = new Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    licenseNumber: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    isVerified: {
      type: Boolean,
    },
    loginAttemps: {
      type: Number,
    },
    timeOut: {
      type: Date,
    },
  },
  {
    timestamps: true, // Guardar el momento exacto en el que se guardo y cuantas versiones tiene
    strict: false, // Para lograr agregar campos nuevos
  },
);

export default model("Drivers", driversSchema);
