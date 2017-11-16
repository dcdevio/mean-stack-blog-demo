const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database'); //this imports config file we created.
const path = require('path');

app.use(express.static(__dirname + '/mean-app/dist/'));

app.get('*', (req, res) => {
  //res.send('<h1>yo!</h1>');
  res.sendFile(path.join(__dirname + '/mean-app/dist/index.html'));
});
//express routing.
//with every get request to the app's root, res response is sent
//changing '/' to '*' works on all directories



//optional mongoose:
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
   if (err) {
    console.log('could not connect to database: ', err);
  } else {
    //console.log(config.secret);
    console.log('connected to database: ' + config.db);
  }
});


app.listen(3000, () => {
  console.log('Listening on port 3000');
});
