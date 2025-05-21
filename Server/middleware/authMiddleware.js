const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'Authentication required' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'Authentication required' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);
    req.user = decoded; 
    next();
  } catch (err) {
    console.error('JWT verification failed:', err.message);
    res.status(401).json({ msg: 'Invalid token' });
  }
}

function adminMiddleware(req, res, next) {
  console.log('adminMiddleware:', req.user);
  if (req.user && req.user.role === 'admin') {
    console.log('Access granted: user is admin');
    return next();
  }
  console.log('Access denied: user is not admin');
  return res.status(403).json({ msg: 'Access denied, admin only' });
}


module.exports = { authMiddleware, adminMiddleware };
