const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// admin get (save for later use)
// router.get('/', (req, res) => {
//     console.log('/orders GET route');
//     // Sql query, join tables and select columns do display
//     // productId, name, price
//     const queryText = `SELECT product.id, product_name, price
// 	                    FROM product 
// 	                    JOIN wishlist
// 	                    ON product.id = wishlist.productid;`;

//     pool.query(queryText)
//         .then((result) => {
//             res.send(result.rows)
//         })
//         .catch((err) => {
//             console.log('GET /wishlist/error', err);
//         })
// })

module.exports = router;