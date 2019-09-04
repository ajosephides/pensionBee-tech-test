const express = require("express");
const fs = require('fs')
const showdown = require('showdown')
const Server = require('./model/server')

const app = express();
const port = process.env.PORT || "8888";

let converter = new showdown.Converter();

app.get(Server.endpoints(__dirname), (req, res) => {
  let template = Server.getTemplate(__dirname)
  let content = Server.getContent(req, __dirname)
  res.status(200)
  res.send(template.replace('{{content}}', converter.makeHtml(content)));
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})


app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
