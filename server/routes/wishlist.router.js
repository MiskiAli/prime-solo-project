const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// admin get (save for later use)
router.get('/wishlist/:id', (req, res) => {
    console.log('/wishlist GET route');
    // Sql query, join tables and select columns do display
    // product_id, product_name, price
    const queryText = `SELECT product.id, product_name, price, image
	FROM product 
	JOIN wishlist
	ON product.id = wishlist.product_id;`;

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((err) => {
            console.log('GET wishlist error', err);
        })
})

// ---post request---



module.exports = router;