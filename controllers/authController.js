//AUTHENTICATION CONTROLLERS

// const {User} = require("../models");
const jwt = require('jsonwebtoken');

module.exports = {

  login: (req, res) => {
    // User
    //   .create(req.body)
    //   .then(data => res.json(data))
    //   .catch(err => res.status(422).json(err));

    const user = {
      _id: 100,
      usename: "mrsantacruz86",
      email: "mrsantacruz86@comcast.net"
    }
    jwt.sign({ user }, 'mySecretKey', { expiresIn: 300 }, (err, token) => {
      res.json({
        message: "login created",
        token
      });
    });
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

  // Format of Token
  // Authorization: Bearer <access_token>

  verifyToken: (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader != "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  }
};
