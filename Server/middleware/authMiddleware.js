const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Prende il token dall'header x-auth-token
  const token = req.header('x-auth-token');
  
  // Se non c'è un token, invia un errore di autenticazione
  if (!token) return res.status(401).json({ msg: 'Autenticazione richiesta' });

  try {
    // Verifica il token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Salva i dati dell'utente nella richiesta (req.user)
    req.user = decoded.user;
    
    // Passa alla prossima funzione del ciclo di vita della richiesta
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token non valido' });
  }
};
