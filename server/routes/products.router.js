const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// ---GET---
// shows everything from db to homepage
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


// ---GET details---
// shows specified product in details page
router.get('/details/:id', (req, res) => {
    console.log('geting the specified product i clicked on');
    const queryText = `SELECT * FROM product WHERE product.id = $1;`;
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

// ---Delete---
// Delete products from homepage and  database on the admin side
router.delete("/:id", (req, res)=>{
    const id = req.params.id;
    console.log('delete from db', id);
    let sqlQuery = `
    DELETE FROM "product"
    WHERE "id" = $1;
    `;
    const sqlParams=[id];
    pool
    .query(sqlQuery, sqlParams)
    .then((res)=>{
        res.sendStatus(200);
    })
    .catch((error)=>{
        console.log('error in product router DELETE', error);
        res.sendStatus(500);
    });
    })

// ---PUT---
// edit product in admin view, changes should show on the Homepage.
router.put('/:id', (req, res)=>{
    const sqlText = `UPDATE product SET product_name = $1, 
    product_discription = $2, price = $3 WHERE id = $4;`;
    pool.
    query(sqlText, [req.body.product_name, req.body.product_discription, req.body.price, req.params.id])
    .then((result)=>{
        console.log('PUT works!!', result);
        res.sendStatus(201)
    })
    .catch((error)=>{
        console.log('PUT is not working FAIL!', error);
    })
})


// ---POST----
// should post new product in the admin view and show on the homepage
router.post('/', (req, res)=>{
    console.log('POST in product.router (ADD_PRODUCT data)', req.body);
    const newProduct = [req.body.product_name, req.body.product_discription, req.body.price, req.body.image, req.body.categories_id];
    const sqlText = `INSERT INTO product 
    (product_name, product_discription, price, image, categories_id) 
    VALUES ($1, $2, $3, $4, $5);`;
    pool.
    query(newProduct, sqlText)
    .then((result)=>{
        console.log('product router post for ADD_PRODUCT is working!', result);
    })
    .catch((error)=>{
        console.log('post in product router is not working FAILED', error);
    })
})


module.exports = router;