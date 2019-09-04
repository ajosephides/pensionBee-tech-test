const express = require("express");
const fs = require('fs')

const app = express();
const port = process.env.PORT || "8888";


const endpoints = () => {
  const folderPath = __dirname + '/content'
  const folders = fs.readdirSync(folderPath);
  return folders.map(fileName => {return `/${fileName}`});
}

let getTemplate = () => { return fs.readFileSync(__dirname + '/template.html', 'utf-8', function(err, data) {
  if (err) {
    console.log('Template not found ' + err);
  } else{
      return data;
    }
  });
}

app.get(endpoints(), (req, res) => {
  
  let content = fs.readFileSync(__dirname + `/content${req.url}/index.md`, 'utf-8', function(err, data) {
    if (err) {
      console.log('content not found ' + err);
    } else{
      return data;
    }
  });
  
  res.send(content)
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

module.exports = {endpoints: endpoints, getTemplate: getTemplate}
