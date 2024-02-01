const User = require("../model/userModel");

const signUp = (req, res) => {
  console.log("signup");
};
const login = (req, res) => {
  console.log("login");
};
const getProfile = (req, res) => {
  console.log("profile");
};
module.exports = { signUp, login, getProfile };
