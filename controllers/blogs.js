import { Blog } from "../models/blog.js"

function newBlog(req, res) {
  res.render('blogs/new' , {
    title: 'Add Post'
  })
}

function index(req, res) {
  Blog.find({})
  .then(blogs => {
    res.render('blogs' , {
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
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
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
  .then(blog => {
    res.render('blogs/show' , {
      blog,
      title: 'Blog Details'
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
  .then( blog=> {
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



export {
  newBlog as new,
  index,
  create,
  show,
  edit,
}