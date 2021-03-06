// HOUSE MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HouseSchema = new Schema({
  number: { type: Number, required: true, unique: true },
  program: { type: String, required: true, enum: ["Res", "UAC"] },
  active: { type: Boolean, default: true },
});

const House = mongoose.model("House", HouseSchema);

module.exports = House;
