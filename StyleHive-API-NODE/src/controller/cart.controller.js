const express=require("express");
const router=express.Router();

const cartService=require("../services/cart.service.js");



const findUserCart = async (req, res) => {
    try {
      const user = req.user;
      const cart = await cartService.findUserCart(user._id);
      res.status(200).json(cart);
    } catch (error) {
      // Handle error here and send appropriate response
      res.status(500).json({ message: "Failed to get user cart.", error: error.message });
    }
}
  

  const addItemToCart = async (req, res) => {
    const user = req.user;
    try {
      
     const cartItem =  await cartService.addCartItem(user.id, req.body);
     
      return res.status(200).send(cartItem);
    } catch (error) {
      // Handle error here and send appropriate response
      // res.status(500).json({ message: "Failed to add item to cart.", error: error.message });
      return res.status(500).send({error: error.message});
    }
  }

  module.exports={findUserCart,addItemToCart};