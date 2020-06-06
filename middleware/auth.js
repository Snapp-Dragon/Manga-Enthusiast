/*
        Middleware are functions that have access to the request and response object of the api.
*/

const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // 1. get the token from the request header
  const token = req.header("x-auth-token"); // look in the request header for token under key name

  // 2. check to see if there is a token in the req header
  if (!token) {
    res.status(401).json({ msg: "No Token, Authorization Denied" });
  }

  // 3. If there is token verify that it is valid
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;

    next();
  } catch (error) {
    res.status(401).json({ msg: "Token Invalid, Authorization denied" });
  }
};
