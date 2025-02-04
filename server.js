const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Middleware pour ajouter X-Total-Count
server.use((req, res, next) => {
  if (req.method === 'GET' && req.url.includes('/posts') || req.url.includes('/users')) {
    const resources = router.db.get(req.url.split('?')[0]).value();
    res.setHeader('X-Total-Count', resources.length);
  }
  next();
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3001');
});