const express = require("express");
const Carts = require("../model/Carts");
const router = express.Router();

const cartController = require("../controllers/cartController");
const verifyToken = require("../middleware/verifyToken");

router.get("/", verifyToken, cartController.getCartByEmail);
router.post("/", cartController.addToCart);
router.delete("/:id", cartController.deleteCart);
router.put("/:id", cartController.updateCart);
router.put("/:id", cartController.getSingleCart);

module.exports = router;
