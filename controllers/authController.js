//AUTHENTICATION CONTROLLERS

// const {User} = require("../models");

module.exports = {

  login: (req, res) => {
    // User
    //   .create(req.body)
    //   .then(data => res.json(data))
    //   .catch(err => res.status(422).json(err));
    res.json({
      message:"login created"
    })
  },

  logout: (req, res) => {
    // User
    //   .create(req.body)
    //   .then(data => res.json(data))
    //   .catch(err => res.status(422).json(err));
    res.json({
      message: "logout called"
    })
  },
};
