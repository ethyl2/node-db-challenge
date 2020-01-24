const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

//Put router stuff here
const ResourcesRouter = require('../resources/resources-router.js');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(morgan('tiny'));
server.use(cors());

server.use('/api/resources', ResourcesRouter);

const port =  process.env.PORT || 9000;

server.get('/', (req, res) => res.send(`API up and running on port ${port}`))

module.exports = server;