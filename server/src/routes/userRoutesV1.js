const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRole = require("../middlewares/roleMiddleware");
const router = express.Router();

router.get("/buyer",verifyToken,authorizeRole("buyer"), (req,res)=>{
    res.json({message:"Welcome buyer"});
} );

router.get("/seller",verifyToken,authorizeRole("seller"), (req,res)=>{
    res.json({message:"Welcome seller"});
} );

router.get("/admin",verifyToken,authorizeRole("admin"), (req,res)=>{
    res.json({message:"Welcome admin"});
} );

module.exports = router;