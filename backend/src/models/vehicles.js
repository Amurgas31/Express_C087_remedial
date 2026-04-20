/*
    Campos:
        plate
        model
        capacity
        status
        driverId
*/

import mongoose, { Schema, model } from "mongoose";

const vehiclesSchema = new Schema(
  {
    plate: {
      type: String,
    },
    model: {
      type: String,
    },
    capacity: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["available", "in_use", "maintenance"],
    },
    driverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Drivers",
    },
  },
  {
    timestamps: true,
    strict: false,
  },
);

export default model("Vehicles", vehiclesSchema);
