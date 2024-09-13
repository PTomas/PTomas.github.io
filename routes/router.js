const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router()

var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/', function (req, res) {
    res.render("index")
});

router.get('/projects', function (req, res) {
    res.render("projects")
});

router.get('/contact', function (req, res) {
    res.render("contact")
});

router.post('/userquery', urlencodedParser, function(req, res){
  let getResponce = req.body.query;
  createResponce(getResponce);
})

router.get('/assets/profile.png', function (req, res) {
    res.sendFile(path.join(__dirname, "/assets/profile.png"));
});

router.get('/assets/LAImage.png', function (req, res) {
    res.sendFile(path.join(__dirname, "/assets/LAImage.png"));
});

module.exports = router