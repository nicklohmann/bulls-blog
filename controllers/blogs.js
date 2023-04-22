import { Blog } from "../models/blog.js"

function index(req, res) {
  Blog.find({})
  .then(blogs => {
    res.render('blogs/index' , {
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


export {
  index,
  show,
}