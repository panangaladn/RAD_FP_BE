import express from "express";

const router=express.Router();

router.post("/",(req,res)=>{
    res.send('This is book from post');
})
router.get("/",(req,res)=>{
    res.send('This is book from get');
})
export default router;


