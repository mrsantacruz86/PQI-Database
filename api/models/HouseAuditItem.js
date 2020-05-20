// AUDIT CHECKLIST MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: Boolean,
    required: true,
    default: false
  },
  cat: {
    type: String,
    enum: ["Household", "Documents", "Safety", "Maintenance"],
    required: true
  },
  finding: {
    type:String,
    default: ""
  }
});

module.exports = ItemSchema;