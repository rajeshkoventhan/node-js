const express= require("express");
const router = express.Router();
const post = require("../models/post");

router.get("/", async(req, res) => {
  try{
    const saves = await post.find()
    res.json(saves)
   } catch(err){
   res.json({err})
    }
  
});

router.post("/", async (req, res) => {
 const Post = new post({
  title : req.body.title,
  description : req.body.description,
 });
try {
  const savepost = await Post.save();
  res.json(savepost);
 }
 catch(err){
  res.json({message : err});
 }

 });
 
 router.get("/:postId", async (req, res) => {
  try{
    const cats = await post.findById(req.params.postId)
    res.json(cats)
   } catch(err){
   res.json({err})
    }
  
});

router.delete("/:postId", async (req, res) => {
  try{
    const cats= await post.remove({_id:req.params.postId})
    res.json(cats)
   } catch(err){
   res.json({err})
    }
  
});

router.patch("/:postId", async (req, res) => {
  try{
    const cats= await post.updateOne({_id:req.params.postId},

      {$set:
      {title:req.body.title},
    }
      );

    res.json(cats)
   } catch(err){
   res.json({err})
    }
  
});

 module.exports = router ;