// HOUSE MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuditItem = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  value: { type: Boolean, required: true, default: false },
  finding: { type: String }
});

const HouseAuditSchema = new Schema({
  cottage: { type: Number, required: true },
  auditor: {
    name: { type: String, required: true },
    id: { type: Schema.Types.ObjectId, ref: "User" }
  },
  date: { type: Date, required: true, default: Date.now() },
  houseAudit: [AuditItem],
  facilitiesAudit: [AuditItem],
  active: { type: Boolean, default: true },
});

const HouseAudit = mongoose.model("HouseAudit", HouseAuditSchema);

module.exports = HouseAudit;