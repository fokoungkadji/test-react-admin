
module.exports = (req, res, next) => {
  console.log('Requête reçue :', req.url);
  res.setHeader('X-Custom-Header', 'Bonjour du middleware');

  next();
};