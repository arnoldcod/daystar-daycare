const express = require('express');
const router = express.Router();
const Doll = require('../models/cartModel');

// GET route to fetch the cart data
router.get('/shop', async (req, res) => {
    try {
      const items = await Doll.find(); // Fetch all items from the database
      res.render('shop', { items }); // Render the shop.pug template with item data
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });


// POST route to add an item to the cart
router.post('/add', async (req, res) => {
    try {
      const newItem = req.body;
      const cart = await Doll.findOne();
      cart.items.push(newItem);
      await cart.save();
      res.status(201).json({ message: 'Item added to cart', cart });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

// DELETE route to remove an item from the cart
router.delete('/remove/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const cart = await Doll.findOne();
    cart.items = cart.items.filter(item => item._id !== itemId);
    await cart.save();
    res.json({ message: 'Item removed from cart', cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
