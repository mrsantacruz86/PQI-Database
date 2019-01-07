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
        if (passwordIsValid && user.status === "active") {
          const payload = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            _id: user._id
          };

          jwt.sign(
            {
              _id: user._id
            },
            process.env.JWT_SECRET,
            //{ expiresIn: 60 * 30 },  //half an hour
            (err, token) => {
              if (err) console.log(err)
              else {
                res.status(200).json({
                  message: "You were successfully authenticated!",
                  user: payload,
                  token
                });
              }
            });
        } else {
          res.status(401).json({ message: "Wrong account crendentials!" });
        }
      })
      .catch(err => res.status(401).json({ message: "Wrong account crendentials!" }));
  },

  // Format of Token
  // Authorization: Bearer <access_token>

  verifyToken: (req, res, next) => {
    const bearerHeader = req.headers["Authorization"];
    if (typeof bearerHeader != "undefined") {
      const bearer = bearerHeader.split(" ");
      const token = bearer[1]; //the token is the second element of the splited array
      console.log("Verifiying token: ",token);
      verifyJWToken(token)
        .then(decodedtoken => {
          req.userId = decodedtoken._id;
          // res.status(200).json({message:"Authorization Granted!"});
          next();
        })
        .catch((err) => {
          res.status(401).json({ message: "Failed to authenticate Token!" })
        });
    } else {
      res.status(403).json({ message: "No authorization token was provided!" });
    }
  },

  // User Registration
  register: (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    const newUser = { ...req.body, password: hashedPassword };
    console.log(newUser);
    User.create(newUser)
      .then(data => res.status(200).json(data))
      .catch(err => {
        return res.status(500).json({
          err,
          message: "The account could not be created"
        })
      });
  }
};
