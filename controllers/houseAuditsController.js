const { HouseAudit } = require('../models');

// Defining methods for the booksController
module.exports = {
  getAll: (req, res) => {
    HouseAudit.find(req.query)
      .sort({ _id: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    HouseAudit.findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    HouseAudit.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    HouseAudit.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    HouseAudit.findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};
