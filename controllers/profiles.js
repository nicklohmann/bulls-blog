import { Profile } from "../models/profile.js"
import { Blog } from "../models/blog.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index' , {
      profiles,
      title: 'Profile Index'
    })
  })
    .catch(err => {
      console.log(err)
      console.log('INDEX ERROR');
      res.redirect('/')
    })
  
}
function show(req, res) {
  Blog.find({author: req.params.profileId})
  .populate('author')
  .populate('tags')
  .then(blogs => {
    res.render('profiles/show' , {
      blogs,
      title: 'Profile Details',
    })
  })
    .catch(err => {
      console.log(req.params);
      console.log(err)
      console.log('SHOW ERROR');
      res.redirect('/')
    })
}


export {
  index,
  show,
}