/* File Name :- index.js
    Student Name :- Dinesh Palle
    Student ID :- 300705307
    Date :- 16-2-19 */

let express = require('express');
let router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

/* POST Route for processing the contacts page */
router.post('/contact', (req, res, next) => {

  // Post data on Console
  console.log(req.body);

  // Go to Home Page
  res.redirect('/');
  
});

module.exports = router; 
