const jsonServer = require('json-server');
const middleware = require('./middleware'); // Chemin vers votre fichier middleware
const db = require('./data.json'); // Chemin vers votre fichier db.json
const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = [middleware]; // Tableau de vos fonctions middleware

server.use(middlewares); // Utilisation de votre middleware personnalisé
server.use(jsonServer.defaults()); // Utilisation du middleware par défaut de json-server (important !)
server.use(router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server est en cours d'exécution sur le port ${port}`);
});