// AUDIT ITEM MODEL

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  score: {
    type: Number,
    max: 20,
    min: 0,
    required: true
  },
  findings: {
    type: [String]
  }
});

// HOUSE AUDIT MODEL

const HouseAuditSchema = new Schema({
  house: {
    type: String,
    required: true
  },
  auditor: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  department: {
    type: String,
    required: true
  },
  items: {
    type: Map,
    of: ItemSchema
  },
  score: {
    type: Number
  },
  maintenance: {
    findings: [String],
    max: Number,
    score: Number
  }
});

const HouseAudit = mongoose.model('HouseAudit', HouseAuditSchema);

module.exports = HouseAudit;
