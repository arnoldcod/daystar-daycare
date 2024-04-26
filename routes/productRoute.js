const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require('mongoose'); // for mongodb


const Product = require ('../models/product');

const products =  [ 
new Product({
    imagePath: '//panther.jpeg',
    title: 'Panther',
    description: 'awesome game!',
    price: 10
}),
 new Product({
    imagePath: '//panther.jpeg',
    title: 'movie',
    description: 'awesome game!',
    price: 200
}),
new Product({
    imagePath: '//panther.jpeg',
    title: 'toy',
    description: 'awesome game!',
    price: 15
}),

];


let done = 0;
for (let i=0; i < products.length; i++) {
   products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
        exit();
    }  
   });  
}

function exit() {
    mongoose.disconnet();
}


router.get("/doll", (req, res, next)=> {
     Product.find( (err, docs)=> {
        res.render("doll", {title: "shopping cart", products: docs});
    });  
});

// router.post("/doll", (req, res)=> {
//     res.render("doll", {title: "shopping cart"});
// })

module.exports = router;