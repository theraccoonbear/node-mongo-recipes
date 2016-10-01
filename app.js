var express = require('express');
var app = express();

// Integration Testing
var testDebug = false;
if(typeof process.env.TEST != "undefined") {
  if(process.env.TEST === "true") {
     testDebug = true;
  }
  
}

var server = function() {
  app.use(require('./routes/index')());


  //error handler
  app.use((err, req, res, next) => {

    if(!err.status) err.status = 500;  //default errors to 500

    switch(err.status){
      case 400:
        if(!err.message) err.message = 'Bad request';
        break;
      case 401:
        if(!err.message) err.message = 'Unauthorized';
        break;
      case 404:
        if(!err.message) err.message = 'Path not found';
        break;
      case 500:
        if(!err.message) err.message = 'Internal Server Error';
        break;
      default:
        console.error('Error handler needs a case for ' + err.status);
        if(!error.message) err.message = 'Error';
    }
    console.log(req.originalUrl);
    console.error(err);
    return res.status(err.status).json({"error": err.message});
  });
  
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    if(testDebug) {
      console.log('Integration Tests completed.  Softly exiting..');
      process.exit(0);
    }
  });
};

server();
