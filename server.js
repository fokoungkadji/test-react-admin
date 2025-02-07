const jsonServer = require('json-server'); //importe la bibliothèque dans le script.
const server = jsonServer.create();  // crée une instance du serveur .
const router = jsonServer.router('db.json');  //crée un routeur qui utilise le fichier db.json comme source de données.

// retourne un ensemble de middlewares par défaut pour JSON Server.
// Comme les en-têtes CORS, les paramettres (nombre total des utilisateurs et posts) et autre.
const middlewares = jsonServer.defaults();

// j'ajoute les middlewares par défaut à l'instance du serveur.
// pour permettre au serveur de gérer les requêtes entrantes et de les traiter correctement.
server.use(middlewares);

server.use(router); //ajoute le routeur à l'instance du serveur.
server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3001');
});