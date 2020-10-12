var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send('ALe\'s home page');
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> About Mr. Phone </h1>'+
    '\n <img src="https://drive.google.com/file/d/1_Bt5aG0_H7EKGaWnK8FQSSlJX9iQ-2mJ/view?usp=sharing" height="60%">'
    );
});

module.exports = router;
// data:image/jpeg;base64,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