import { Schema, model } from "mongoose";

const stopPoint = {
  stopId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  directions: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
};

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  stopPoints: [stopPoint],
  pinCode: {
    type: Number,
    required: true,
  },
});

const cityModel = model("City", citySchema);

export default cityModel;
