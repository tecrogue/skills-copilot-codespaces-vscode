// Create web server
const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

// Use body-parser middleware
app.use(bodyParser.json());

// Comments array
let comments = [
    {id: 1, user: 'Alice', message: 'Hello world'},
    {id: 2, user: 'Bob', message: 'Hi there'}
];