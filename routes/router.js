const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router()

var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/', function (req, res) {
    res.render("index")
});

router.get('/products', function (req, res) {
    res.render("products")
});

router.get('/contact', function (req, res) {
    res.render("contact")
});

router.post('/userquery', urlencodedParser, function(req, res){
  let getResponce = req.body.query;
  createResponce(getResponce);
})


module.exports = router