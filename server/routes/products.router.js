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

// ---get details---
// set up router 
router.get('/details/:id', (req, res) => {
    console.log('geting the specified product i clicked on');
    const queryText = `SELECT * FROM product WHERE product.id = $1;`;

    // `SELECT product.id, product_name, image, product_discription, array_agg(categories.product_name) 
    // FROM product JOIN
    // categories ON categories.id = categories_id
	// WHERE product.id = $1
	// GROUP BY product.id;`;

    const sqlParams = [req.params.id];
    console.log('router working?',req.params.id);
    pool.query(queryText, sqlParams)
    .then((result) => {
        console.log('result: ', result.rows[0]);
        if (result.rows.length === 0){
            console.log(`no products found with this id ${req.params.id}`);
            res.sendStatus(404)
            return;
        }
    res.send(result.rows[0]);
    })
    .catch((error)=>{
        console,log('get clicked on products failed', error)
    })

})


module.exports = router;