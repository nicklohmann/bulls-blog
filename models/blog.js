import mongoose from 'mongoose'

const Schema = mongoose.Schema

const blogSchema = new Schema({
  content: String,
  title: String, 
  creator: { type: Schema.Types.ObjectId, ref: "Profile" }


})

const Blog = mongoose.model('Blog', blogSchema)

export {
  Blog
}