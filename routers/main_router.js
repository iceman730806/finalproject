let express = require('express');
let router = express.Router();
let King = require('./King.js');
let Vock = require('./Vock.js');
let Arlen = require('./Arlen.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/King', King);
router.use('/Vock', Vock);
router.use('/Arlen', Arlen);

module.exports = router;