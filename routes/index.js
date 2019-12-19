const express = require("express");
const mongoose = require('mongoose');
const Lab = require('../models/labyrinth');
const router = express.Router();

router.get('/', async(req, res) => {
    // let test = await Lab.find({});
    //    console.log(test);
    // console.log(req.body.value);
    // let data = req.body.value;
    // let test = await Lab.find({field:req.body.value});
    // console.log(test);
    // res.render('field')
    let data = new Lab ({
        name : 'test'
    });
    await data.save();
    res.send('added')
});

router.get('/field', async (req, res) => {
    let test = await Lab.find({});
    console.log(test[0].field[0][0].id.default);
    let a = test[0].field[0],
        b = test[0].field[1],
        c = test[0].field[2],
        d = test[0].field[3],
        e = test[0].field[4],
        f = test[0].field[5],
        g = test[0].field[6],
        h = test[0].field[7],
        i = test[0].field[8],
        j = test[0].field[9],
        k = test[0].field[10];
    await res.render('field', {a, b, c, d, e, f, g, h, i, j, k})
});

module.exports = router;
