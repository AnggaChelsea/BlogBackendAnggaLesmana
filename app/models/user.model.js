const sql = require("./db.js");
const bcrypt = require('bcryptjs');

// constructor
const User = function(users) {
  this.email = users.email;
  this.name = users.name;
  this.password = users.password;
};

User.create = (newUser, result, next) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      if(this.email === users.email){
        next({message: "email already exits"})
      }else{
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
        next();
      }
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created User: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
  
};



module.exports = User;
