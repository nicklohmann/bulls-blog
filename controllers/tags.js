import { Tag } from "../models/tag.js"

function newTag(req, res) {
  Tag.find({})
  .then(tags => {
    res.render('tags/add') , {
      title: 'Add Tag',
      tags
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/blogs')
  })
}

function create(req, res) {
  Tag.create(req.body)
  .then(tag => {
    res.redirect('/tags/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tags/new')
  })
}


export {
  newTag as new,
  create,
}