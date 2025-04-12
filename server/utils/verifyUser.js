const jwt = require('jsonwebtoken');
const { errorHandler } = require('./error.js');

const verifyToken = (req, res, next) => {
  console.log("in verificare token");

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return next(errorHandler(401, "Not authenticated!!"));
  }
    
  //console.log("autheader",authHeader);
  const token = authHeader.split(' ')[1]; // Extract the token from the Bearer string
  //console.log("token verificare", token);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(403, "Token is not valid!"));
    }
    // Attach user to the request object
    req.user = user;
    next();
  });
};

module.exports = { verifyToken };
