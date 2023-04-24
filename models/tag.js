import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tagSchema = new Schema({
  name: {type: String},
},{
  timestamps: true,
})
const Tag = mongoose.model('Tag' , tagSchema)

export {
  Tag
}