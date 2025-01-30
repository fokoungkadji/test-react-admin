
module.exports = (req, res, next) => {
  console.log('Requête reçue :', req.url);
  // Vous pouvez modifier la requête ou la réponse ici
  // Par exemple, ajouter un en-tête :
  res.setHeader('X-Custom-Header', 'Bonjour du middleware');

  // Important : Appeler next() pour passer le contrôle au middleware suivant ou au routeur
  next();
};