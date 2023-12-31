const express = require("express");
const http = require("http");
const path = require("path");
const app = express();

const { routesInit } = require('./routers/configRoute');

//infromation in json
app.use(express.json());

app.use(express.json({ limit: "1mb" }));

//Go to file public and get data
app.use(express.static(path.join(__dirname, 'public')));

//Initializes existing ruoters
routesInit(app);

const server = http.createServer(app);

let port = process.env.PORT || '3000';

server.listen(port);