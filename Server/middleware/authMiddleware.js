const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) return res.status(401).json({ msg: 'Autenticazione richiesta' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    Request.find({ user: req.user.id })
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token non valido' });
  }
};
