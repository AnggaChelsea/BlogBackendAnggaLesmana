

const Blogs = require('../models/blogpost.model');
exports.create = (req,res) => {
  if(!req.body){
    res.status(400).send({message:'dont make empty please'})
  }
  const blogs = new Blogs({
    title: req.body.title,
    description: req.body.description
  })
  Blogs.create(blogs, (err, data)=>{
    if(err)
    res.status(500).send({message:err.message||'sorry our server error'})
    else res.status(200).send({message:'oke your blogs has register'})
  })
}

exports.findAll = (req, res) => {
 Blogs.getAll((err, data)=>{
   if(err)
     res.status(500).send({message:err.message||'sorry there some error'})
     else res.status(200).send({message:'ok', data})
 })
}


exports.findId = (req, res) => {
  Blogs.findById(req.params.blogsId, (err, data)=>{
    if(err){
      if(err.kind === 'not found'){
        res.status(404).send({message:err.message || `not found id ${req.params.blogsId}`})
      }
    }else res.status(200).send({message:data})
  })
}