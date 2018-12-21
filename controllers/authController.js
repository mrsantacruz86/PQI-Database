//AUTHENTICATION CONTROLLERS

const { User } = require("../models");
const jwt = require('jsonwebtoken');
const verifyJWToken = require('../libs/auth');
const bcrypt = require('bcryptjs');

module.exports = {

  login: (req, res) => {

    User.findOne({
      $or: [
        { username: req.body.username },
        { email: req.body.username }
      ]
    })
      .then(user => {
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if(passwordIsValid){
          jwt.sign(
            { _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: 60 * 30 },  //half an hour
            (err, token) => {
              if(err) console.log(err)
              else{
                res.json({
                  message: "login created",
                  token
                });
              }
            });
        } else {
          res.status(401).json({message:"Wrong account crendentials!"});
        }
      })
      .catch(err => res.status(401).json({message:"Wrong account crendentials!"}) );
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
    const newUser = { ...req.body, password: hashedPassword };
    User.create(newUser)
      .then(data => res.status(200).json(data))
      .catch(err => {
        return res.status(500).send(`There was a problem registering the user. \n ${err}`)
      });
  }
};
