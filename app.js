const express = require("express");
const fs = require('fs')

const app = express();
const port = process.env.PORT || "8888";

const folderPath = __dirname + '/content'
const endpoints = () => {return fs.readdirSync(folderPath).map(fileName => {return `/${fileName}`})}

app.get(endpoints(), (req, res) => {
  res.send('Hello world')
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

module.exports = {endpoints: endpoints}
