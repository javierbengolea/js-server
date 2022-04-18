const { application } = require("express");
const express = require("express");
require("dotenv").config();
const axios = require("axios");
var mysql = require("mysql");
const Connection = require("mysql/lib/Connection");

var app = express();
const PORT = "3050";

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Aplicacion en el puerto: ${PORT}`);
});

app.use(express.json());

/* app.get("/customers/:CustomerId", (req, res) => {
  res.json({ "Hola pirulais ": req.params });
}); */

app.get("/customers/:CustomerId", (req, res) => {
  axios
    .get(process.env.url + "/customers/" + req.params.CustomerId)
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
});

app.get("/customers/:CustomerId", (req, res) => {
  axios
    .get(process.env.url + "/customers/" + req.params.CustomerId)
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
});

app.get("/articulo/:id", (req, res) => {
  var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  connection.connect();


  res.send("ATR")
});
