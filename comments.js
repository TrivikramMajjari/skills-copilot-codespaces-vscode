// Create web server
// Create a new web server with express.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./data/comments');

app.use(bodyParser.json());