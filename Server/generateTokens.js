const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secretkey';

const adminToken = jwt.sign({ id: '1', role: 'admin' }, secret, { expiresIn: '1h' });
const userToken = jwt.sign({ id: '2', role: 'user' }, secret, { expiresIn: '1h' });

console.log('Admin token:', adminToken);
console.log('User token:', userToken);
