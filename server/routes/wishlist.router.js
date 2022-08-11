const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



// admin get (save for later use)
router.get('/', (req, res) => {
    console.log('/wishlist GET route');
    // Sql query, join tables and select columns do display
    // product_id, product_name, price and image
    const queryText = `SELECT product.id, product_name, price, image, wishlist.id
	FROM product 
	JOIN wishlist
	ON product.id = wishlist.product_id;`;
    pool.query(queryText)
        .then((result) => {
            console.log(`this should be everything in the wishlist`, result.rows)
            res.send(result.rows)
        })
        .catch((error) => {
            console.log('GET wishlist error', error);
            res.sendStatus(500)

        })
})

// ---POST---
// post to db
router.post('/', (req, res) => {
    console.log('POST request');
    let sqlQuery = `INSERT INTO wishlist (user_id, product_id) VALUES ($1, $2)`;
    const sqlValue = [req.user.id, req.body.id];
    console.log('why is it not working?',req.body);
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
// ---DELETE---
// delete from wishlist and db 
router.delete("/:id", (req, res)=>{
const id = req.params.id;
console.log('delete from db', id);
let sqlQuery = `
DELETE FROM "wishlist"
WHERE "id" = $1;
`;
const sqlParams=[id];
pool
.query(sqlQuery, sqlParams)
.then((res)=>{
    res.sendStatus(200);
})
.catch((error)=>{
    console.log('error in wishlist router DELETE', error);
    res.sendStatus(500);
});
})




module.exports = router;