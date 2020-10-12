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
router.use('/MrPhone', MrPhone);
router.use('/QBank', QBank);
router.use('/ALe', ALe);

module.exports = router;