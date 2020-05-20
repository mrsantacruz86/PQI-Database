//MODELS INDEX
const mongoose = require('mongoose');
const HouseItemSchema = require('../models/HouseAuditItem');
const AuditItemsModel = mongoose.model("HouseItems", HouseItemSchema);

module.exports = {
  House: require("./House"),
  HouseAudit: require("./HouseAudit"),
  HouseAuditItems: AuditItemsModel,
  User: require("./User")
};
