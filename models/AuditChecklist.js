// AUDIT CHECKLIST MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  label: {
    type: String
  },
  auditType:{
    type: String,
    required: true
  }
});

const AuditItems = mongoose.model("AuditItems", ItemSchema);

module.exports = AuditItems;