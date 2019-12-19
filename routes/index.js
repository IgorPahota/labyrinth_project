const express = require("express");
const mongoose = require('mongoose');
const Lab = require('../models/labyrinth');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('field')
});

// router.get('/field', (req, res) => {
//     res.render('field')
// });

router.get('/keyboard', (req, res) => {
    res.render('keyboard')
});

router.get('/field', async (req, res) => {
    let test = await Lab.find({});
    console.log(test[0].field[0][0].id.default);
    // let newField = [];
    // for (let i = 0; i < test[0].length; i++) {
    //     newField.push(test[0].field[i])
    // }
    // console.log(newField);
    let value = test[0].field;
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
        k = test[0].field[10]
    await res.render('field', {a, b, c, d, e, f, g, h, i, j, k})
});

module.exports = router;
