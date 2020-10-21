const express = require('express');
const router=express.Router();
const mongoose=require('mongoose');
const requireLogin=require("../middleware/requireLogin")
const Post=mongoose.model('Post')

router.get('/allpost',requireLogin,(req,res)=>{
    Post.find()
    .populate('postedBy',"_id name")
    .then(posts=>{
        res.json({posts})

    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body,pic}=req.body;

    if(!title||!body||!pic)
    {
        res.status(422).json({error:"pleade add all the fields"});
    }
    // console.log(req.user);
    // res.send('ok');

    req.user.password=undefined;

    const post=new Post({
        title,
        body,
        photo:pic,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err);
    })
})

router.get('/mypost',requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate('popstedBy','_id name')
    .then(mypost=>{
        res.json({mypost});
    })
    .catch(err=>{
        console.log(err);
    })
})


router.put('/like',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err)
        {
            return res.status(422).json({error:err})
        }
        else
        {
            res.json(result)
        }
    })
})

router.put('/unlike',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err)
        {
            return res.status(422).json({error:err})
        }
        else
        {
            res.json(result)
        }
    })
})


router.put('/comment',requireLogin,(req,res)=>{
    const comment={
        text:req.body.text,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{commnets:comment}
    },{
        new:true
    })
    .populate("comments.postedBy","_id name")
    .exec((err,result)=>{
        if(err)
        {
            return res.status(422).json({error:err})
        }
        else
        {
            res.json(result)
        }
    })
})


module.exports=router