import { Blog } from "../models/blog.js"
import { Tag } from "../models/tag.js"

function newBlog(req, res) {
  res.render('blogs/new', {
    title: 'Add Post'
  })
}

function index(req, res) {
  Blog.find({})
    .then(blogs => {
      res.render('blogs', {
        blogs,
        title: 'Blog Index'
      })
    })
    .catch(err => {
      console.log(err)
      console.log('INDEX ERROR');
      res.redirect('/')
    })

}

function create(req, res) {
  req.body.creator = req.user.profile._id
  Blog.create(req.body)
    .then(blog => {
      res.redirect(`/blogs/`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/blogs/new')
    })

}
function show(req, res) {
  Blog.findById(req.params.blogId)
    .populate('tags')
    .then(blog => {
      Tag.find({ _id: { $nin: blog.tags } })
        .then(tags => {
          res.render('blogs/show', {
            blog,
            title: 'Blog Details',
            tags
          })
        })
        .catch(err => {
          console.log(err)
          res.sen("TAG INFO NOT FOUND")
          res.redirect("/blogs")
        })
    })
    .catch(err => {
      console.log(err)
      console.log('SHOW ERROR');
      res.redirect('/')
    })
}
function edit(req, res) {
  Blog.findById(req.params.blogId)
    .then(blog => {
      res.render('blogs/edit', {
        blog,
        title: 'Edit Blog'
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/blogs')
    })
}
function update(req, res) {
  Blog.findByIdAndUpdate(req.params.blogId, req.body, { new: true })
    .then(blog => {
      res.redirect(`/blogs/${blog._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/blogs')
    })
}
function deletePost(req, res) {
  Blog.findByIdAndDelete(req.params.blogId)
    .then(blog => {
      res.redirect('/blogs')
    })
    .catch(error => {
      console.log(error);
      res.redirect('/blogs')
    })
}
function addTagToPost(req, res) {
let { blogId } = req.params
let { tagsId } = req.body
  Blog.findById(blogId)
    .then((blog) => {
      blog.tags.push(req.body.tagsId)
      blog
        .save()
        .then(() => {
          res.redirect(`/blogs/${blog._id}`)
        })
        .catch((err) => {
          console.log(err)

          res.redirect("/blogs")
        })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/blogs")
    })
}

export {
  newBlog as new,
  index,
  create,
  show,
  edit,
  update,
  deletePost as delete,
  addTagToPost,
}