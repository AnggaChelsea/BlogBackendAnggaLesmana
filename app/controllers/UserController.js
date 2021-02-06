
const sql = require("../models/db");
const User = require('../models/user.model');
exports.register = (req,res) => {
  if(!req.body){
    res.status(400).send({message:'don t make empty please'})
  }
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
  User.create(user, (err, data)=>{
    if(err)
    res.status(500).send({message:err.message||'sorry our server error'})
    else res.status(200).send({message:'oke you registered'})
  })
}