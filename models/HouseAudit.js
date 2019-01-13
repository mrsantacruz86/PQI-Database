// HOUSE AUDIT MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuditItemSchema = new Schema({
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
  value: {
    type: Boolean,
    required: true,
    default: false
  },
  finding: {
    type: String
  }
});

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
  houseAudit: { AuditItemSchema },
  facilitiesAudit: { AuditItemSchema }
});

const HouseAudit = mongoose.model("HouseAudit", HouseAuditSchema);

module.exports = HouseAudit;