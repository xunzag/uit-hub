const jwt = require('jsonwebtoken');
const User = require("../model/userSchema");

const requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    if (!token) {
      throw new Error('Unauthorized: No Token Provided');
    }

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

    if (!user) {
      throw new Error('Unauthorized: Invalid Token');
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = requireAuth;
