const sql = require("./db.js");

// constructor
const Blogs = function(blogs) {
  this.title = blogs.title;
  this.description = blogs.description
};

Blogs.create = (newBlogs, result) => {
  sql.query("INSERT INTO blogs SET ?", newBlogs, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created Blogs: ", { id: res.insertId, ...newBlogs });
    result(null, { id: res.insertId, ...newBlogs });
  });
};

Blogs.findById = (blogsId, result) => {
  sql.query(`SELECT * FROM blogs WHERE id = ${blogsId}`, (err, res)=>{
    if(err){
      console.log('error', err);
      result(err, null);
      return;
    }
    if(res.length){
      console.log('found blogs status', res[0]);
      result(null,res[0])
      return;
    }
    result({kind: 'not_found'}, null);
  })
}

Blogs.getAll = result => {
  sql.query('SELECT * FROM blogs', (err, res)=>{
    if(err){
      console.log('error', err);
      return;
    }
    console.log('blogs', res)
    result(null, res)
  })
}

module.exports = Blogs;
