

const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send(
        [
        {id: 1, name: 'Product 1'},
        {id: 2, name: 'Product 2'},
        {id: 3, name: 'Product 3'}]

    );
})

.get(' /serach', (req, res, next) => {
    res.send('Search for products');
})
.get ('/:id', (req, res, next) => {
    
    res.send(`Product with id ${req.params.id}`);
})

module.exports = router;

