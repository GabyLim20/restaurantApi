const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(403).send("No autorizado");
  next(); 
};

module.exports = authMiddleware;  
