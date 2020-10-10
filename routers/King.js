let express = require('express');
let router = express.Router();
router.use(express.static('./public')); // 把 public 中的檔案全部丟上來
// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send(
    'King\'s home page'+'<br>'+
    '<a href="/user/King/about"> about </a>'+'<br>'+
    '<a href="/user/King/classA.html"> classA </a>'
    );
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> About King </h1>'+
    '\n <img src="https://drive.google.com/file/d/1d9oT4ckbUtzFlgTrXZjp-_KOjcl7FGzY/view?usp=sharing" height="60%">'
    // '\n <img src="https://www.omgtw.com/upload/article/original/be134fac90625546754962aeef34925c.jpg" height="60%">'
    );
});

module.exports = router;
