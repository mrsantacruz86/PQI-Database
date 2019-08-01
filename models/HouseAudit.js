// AUDIT ITEM MODEL

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    max: 20,
    min: 1,
    required: true
  },
  finding: {
    type: [String],
    default: []
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
    required: true,
    default: Date.now()
  },

  items: { ItemSchema },
  score: {
    type: Number,
    required: true
  }
});

const HouseAudit = mongoose.model('HouseAudit', HouseAuditSchema);

module.exports = HouseAudit;
