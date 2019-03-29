const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const dishesRouter = require("../routes/dishes");
const recipesRouter = require("../routes/recipes");

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/cookbook.sqlite3'
    },
    useNullAsDefault: true
}

const db= knex(knexConfig);

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/dishes", dishesRouter);
server.use("/api/recipes", recipesRouter);

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
