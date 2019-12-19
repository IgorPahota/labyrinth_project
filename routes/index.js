const express = require("express");

const router = express.Router();

const mongoose = require('mongoose');

const Lab = require('../models/labyrinth');




router.get('/', async(req, res) => {
 // let test = await Lab.find({});
 //    console.log(test);
    res.render('field')

});


router.post('/', async(req, res) => {
    // let test = await Lab.find({});
    //    console.log(test);
    // console.log(req.body.value);
    let data = req.body.value;
    let test = await Lab.find({field:req.body.value});
    console.log(test);
    res.render('field')

});


router.get('/field', (req, res) => {
    res.render('field')
});

router.post('/field', (req, res) => {
    console.log(req)
})
router.get('/keyboard', (req, res) => {
    res.render('keyboard')
});


module.exports = router;
