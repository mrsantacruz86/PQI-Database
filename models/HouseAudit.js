// HOUSE MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuditItemSchema = new Schema({
  id: { type: Number, required, unique},
  name: { type: String, required, unique },
  value: { type: Boolean, required, default: false },
  finding: { type: String }
});

const HouseAuditSchema = new Schema({
  cottage: { type: Number, required },
  auditor: {
    name: { type: String, required },
    id: { type: Schema.Types.ObjectId, ref: "User" }
  },
  date: { type: Date, required, default: Date.now() },
  houseAudit: [AuditItemSchema],
  facilitiesAudit: [AuditItemSchema]
});

const HouseAudit = mongoose.model("HouseAudit", HouseAuditSchema);

module.exports = HouseAudit;