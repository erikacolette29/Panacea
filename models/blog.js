const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
postedBy: [{ type: Schema.Types.ObjectId, ref: 'User'}],
comment: {type: String, required: true}

},{
    timestamps: true
}
)



const blogSchema = new Schema({
title: {type: String, required: true },
content: {type: String, required: true},
postedBy: [{ type: Schema.Types.ObjectId, ref: 'User'}],
likedBy:  [{ type: Schema.Types.ObjectId, ref: 'User'}],
comments: [commentSchema]

},{
    timestamps: true
}
)

module.exports = mongoose.model('Blog', blogSchema);