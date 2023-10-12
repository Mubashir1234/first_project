// check the person hiting the api has token or not
// if its a valid token let him perform the task
var jwt = require("jsonwebtoken");

async function authentication(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    if (!token) {
      res.send(400).json({ sucess: false, message: "Token is not found" });
    } else {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.tokenData = decodedToken;
      next();
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error", Error: err.message });
  }
}

module.exports = { authentication };
