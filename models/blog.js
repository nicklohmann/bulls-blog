import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  author: { type: Schema.Types.ObjectId, ref: "Profile"}
})

const blogSchema = new Schema({
  content: String,
  title: String, 
  tags: [{type: Schema.Types.ObjectId, ref: "Tag"}],
  author: { type: Schema.Types.ObjectId, ref: "Profile" },
  comments: [commentSchema]
}, {
  timestamps: true,
})

const Blog = mongoose.model('Blog', blogSchema)

export {
  Blog
}