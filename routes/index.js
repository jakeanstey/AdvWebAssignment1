var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jake Anstey' });
});

/* GET About me page */
router.get('/about', function(req, res, next){
  res.render('about', { title: 'About Me' })
});

/* Get Project page */
router.get('/projects', function(req, res, next){
  res.render('about', { title: 'Projects' });
});

/* GET Services page */
router.get('/services', function(req, res, next){
  res.render('services', { title: 'Services' });
});

router.get('/contact', function(req, res, next){
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
