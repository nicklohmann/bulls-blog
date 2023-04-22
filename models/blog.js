import mongoose from "mongoose"

const Schema = mongoose.Schema

const blogSchema = new Schema({
  content: String, title: String, creater: [{type: Schema.Types.ObjectId, ref: "profile"}]})

const Blog = mongoose.model('Blog', blogSchema)

export {
  Blog
}