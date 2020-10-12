let express = require('express');
let router = express.Router();
let MrPhone = require('./MrPhone.js');
let QBank = require('./QBank.js');
let ALe = require('./ALe.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/MrPhone', Mr. Phone);
router.use('/QBank', QBank);
router.use('/ALe', A-Le);

module.exports = router;