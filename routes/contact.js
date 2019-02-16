/* File Name :- contact.js
    Student Name :- Dinesh Palle
    Student ID :- 300705307
    Date :- 16-2-19 */

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
                title: 'Contact',
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