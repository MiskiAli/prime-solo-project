const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {

    const queryText = `SELECT * FROM wishlist `;
    pool.query(queryText)
    .then( (result) => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Get all wishlist', err);
        res.sendStatus(500)
    })
})


// admin get (save for later use)
router.get('/', (req, res) => {
    console.log('/wishlist GET route');
    // Sql query, join tables and select columns do display
    // product_id, product_name, price and image
    const sqlQuery = `SELECT product.id, product_name, price, image
	FROM product 
	JOIN wishlist
	ON product.id = wishlist.product_id;`;


    pool.query(sqlQuery)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((error) => {
            console.log('GET wishlist error', error);
        })
})

// ---post request---

router.post('/', (req, res) => {
    console.log('POST request');
    let sqlQuery = `INSERT INTO wishlist (user_id, product_id) VALUES ($1, $2)`;
    const sqlValue = [req.user.id, req.body.product_id];
    pool
    .query(sqlQuery, sqlValue)
    .then((result)=>{
        res.send(result.rows[0]);
    })
    .catch((error)=>{
        console.log('error in wishlist router post', error);
        res.sendStatus(500);
    });
});






module.exports = router;