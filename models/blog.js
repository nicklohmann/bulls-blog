import mongoose from 'mongoose'

const Schema = mongoose.Schema

const blogSchema = new Schema({
  content: String,
  title: String, 
  tags: [{type: Schema.Types.ObjectId, ref: "Tag"}],
  creator: { type: Schema.Types.ObjectId, ref: "Profile" },
}, {
  timestamps: true,
})

const Blog = mongoose.model('Blog', blogSchema)

export {
  Blog
}