'use strict';

require('dotenv').config({path: __dirname + '/.env'}); // require env

const express       = require('express');
const path          = require('path');
const favicon       = require('serve-favicon');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');

const app           = express();


// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Set Public Path Dir
app.use(express.static(path.join(__dirname, 'public')));


// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

//Port Config
const server      = require('http').Server(app);
const serverIp    = process.env.APP_IP || '0.0.0.0';
const serverPort  = process.env.APP_PORT || 20310;

server.listen(serverPort, serverIp);

module.exports = app;