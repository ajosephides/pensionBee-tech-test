const fs = require('fs')

const endpoints = (rootDir) => {
  const folderPath = rootDir + '/content'
  const folders = fs.readdirSync(folderPath);
  return folders.map(fileName => {return `/${fileName}`});
}

let getTemplate = (rootDir) => { return fs.readFileSync(rootDir + '/template.html', 'utf-8', function(err, data) {
  if (err) {
    console.log('Template not found ' + err);
  } else{
      return data;
    }
  });
}

let getContent = (req, rootDir) => {return fs.readFileSync(rootDir + `/content${req.url}/index.md`, 'utf-8', function(err, data) {
  if (err) {
    console.log('content not found ' + err);
  } else{
    return data;
  }
});
}


module.exports = {endpoints: endpoints, getTemplate: getTemplate, getContent: getContent}
