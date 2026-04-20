/*
    Campos:
        origin
        destination
        distance
        estimatedTime
*/

import mongoose, { Schema, model } from "mongoose";

const routesSchema = new Schema(
  {
    origin: {
      type: String,
    },
    destination: {
      type: String,
    },
    distance: {
      type: String,
    },
    estimatedTime: {
      type: String,
    },
  },
  {
    timestamps: true,
    strict: false,
  },
);

export default model("Routes", routesSchema);