// AUDIT CHECKLIST MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  itemId: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  label: {
    type: String,
    required: true,
    unique: true
  },
  cat: {
    type: String,
    enum: ["Household", "Documents", "Safety"],
    required: true
  },
  description: String
});

const HouseAuditItem = mongoose.model("HouseAuditItem", ItemSchema);

module.exports = HouseAuditItem;