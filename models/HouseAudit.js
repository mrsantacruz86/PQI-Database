// AUDIT ITEM MODEL

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  tag: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    max: 100,
    min: 1,
    required: true
  },
  pass: {
    type: Boolean,
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

  medication: ItemSchema,
  documentation: ItemSchema,
  ss: ItemSchema,
  hc: ItemSchema,
  organization: ItemSchema,
  supplies: ItemSchema,
  pr: ItemSchema,
  equipment: ItemSchema,

  score: {
    type: Number,
    required: true
  }
});

const HouseAudit = mongoose.model('HouseAudit', HouseAuditSchema);

module.exports = HouseAudit;
