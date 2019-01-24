var express = require('express');
var router = express.Router();




router.get('/', function (req, res, next) {
    res.clearCookie('authenticated');
    res.redirect(200, '/');
});
router.post('/', function(req, res, next) {
    console.log("ok");
    console.log(req.body);
    if (req.body.email==="true" && req.body.password==="true"){
        res.cookie('authenticated', 'true');
        res.redirect(200, `/private`);
    } else {
        res.redirect(302, `/`);
    };
});

module.exports = router;