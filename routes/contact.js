let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the database schema
let contact = require('../models/contact');

/* GET Contact List Page - READ Operation */
router.get('/', (req, res, next) => {
    contact.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
            //console.log(contactList);

            
            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList
            });
            
        }

    });
});

/* POST Route for processing the contacts page */
router.post('/index', (req, res, next) => {

    console.log(req.body);
    
});

module.exports = router; 