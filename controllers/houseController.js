const { House } = require("../models");

// Defining methods for the booksController
module.exports = {
  getAll: (req, res) => {
    House
      .find(req.query)
      .sort({ number: 1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    House
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    House
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    House
      .findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      )
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    House
      .findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};
