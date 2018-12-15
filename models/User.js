// USER MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  acountCreated: { type: Date, default: Date.now() },
  active: { type: Boolean, default: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
