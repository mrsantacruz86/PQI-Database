//AUTHENTICATION CONTROLLERS

const { User } = require("../models");
const jwt = require('jsonwebtoken');
const verifyJWToken = require('../libs/auth');
const bcrypt = require('bcryptjs');

module.exports = {

  login: (req, res) => {

    const user = {
      _id: 100,
      usename: "mrsantacruz86",
      email: "mrsantacruz86@comcast.net"
    }
    jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: 300 }, (err, token) => {
      res.json({
        message: "login created",
        token
      });
    });
  },

  logout: (req, res) => {
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
      const token = bearer[1];
      verifyJWToken(token)
        .then(decodedtoken => {
          req.user = decodedtoken;
          res.send("the token is OK");
          next()
        })
        .catch((err) => {
          res.status(403)
            .json({ message: "Invalid auth token provided." })
        });
      next();
    } else {
      res.status(403);
    }
  },

  // User Registration
  register: (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    const newUser = { ...req.body, password: hashedPassword};
    User.create(newUser)
      .then(data => res.status(200).json(data))
      .catch(err => {
        return res.status(500).send(`There was a problem registering the user. \n ${err}`)
      });
  }
};
