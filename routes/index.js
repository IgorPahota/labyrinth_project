const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
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
