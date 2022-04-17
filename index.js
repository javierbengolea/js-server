const { application } = require("express");
const express = require("express");
var app = express();
const PORT = "3050";


app.use(express.json())

app.listen(PORT, () => {
  console.log(`Aplicacion en el puerto: ${PORT}`);
});

app.use(express.json())

app.get("/customers/:CustomerId", (req, res) => {
  res.json({"Hola pirulais ": req.params});
});
