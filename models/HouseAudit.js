// HOUSE AUDIT MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const HouseAuditItem = require('./HouseAuditItem')

const HouseAuditSchema = new Schema({
  cottage: {
    type: Number,
    required: true
  },
  auditor: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },
  auditItems: { HouseAuditItem }
});

const HouseAudit = mongoose.model("HouseAudit", HouseAuditSchema);

module.exports = HouseAudit;