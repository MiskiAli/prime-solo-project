const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// ---router get---
router.get('/', (req, res) => {

    const queryText = `SELECT * FROM "product"`;
    pool.query(queryText)
    .then( (result) => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Get all product', err);
        res.sendStatus(500)
    })

});

module.exports = router;