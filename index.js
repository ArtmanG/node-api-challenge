const express = require('express');
const server = express();

const projectsRouter = require('./routers/projects');
const actionsRouter = require('./routers/actions');

server.use(express.json());

server.use('/projects', projectsRouter);
server.use('/actions', actionsRouter); 

server.get('/', (req, res) => {
    res.send(`Leave me alone, I'm working`);
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`\n=== Server Running on http://localhost:${port} ===\n`);
  });