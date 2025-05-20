const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.header('Authorization') || req.header('authorization');

  if (!authHeader) return res.status(401).json({ msg: 'Authentication required' });

  const token = authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ msg: 'Authentication required' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};
