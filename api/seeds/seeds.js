const HouseAuditItem = require('../models/HouseAuditItem');
const mongoose = require('mongoose');
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/pqi-database';
const houseAuditItems = require('./houseAuditItems');
const AuditItemsModel = mongoose.model('HouseItems', HouseAuditItem);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, autoIndex: false })
  .then(() => {
    console.log('MongoDB connected successfuly');
    seedAuditItems();
    // console.log(houseAuditItems);
  })
  .catch(err => console.log(err));

const seedAuditItems = () => {
  AuditItemsModel.insertMany(houseAuditItems)
    .then(res => console.log('Records Successfully added'))
    .catch(err => console.log(err));
};
