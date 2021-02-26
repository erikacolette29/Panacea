const Blog = require("../models/blog")

module.exports = {
index,
create,
delete: deleteOne,
}

function index(req,res){
    Blog.find({})
    // .populate('postedBy')
    .then(blogs => {res.json(blogs)})
    .catch(err => {res.json(err)})
}

function create(req,res){
    // req.body.postedBy = req.user._id
    Blog.create(req.body)
    .then(blog => {res.json(blog)})
    .catch(err => {res.json(err)})
}
function deleteOne(req,res){
    Blog.findByIdAndDelete(req.params.id)
    .then(blog => {res.json(blog)})
    .catch(err => {res.json(err)})
}