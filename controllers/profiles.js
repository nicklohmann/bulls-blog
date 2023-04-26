import { Profile } from "../models/profile.js"

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
  Profile.findById(req.params.profileId)
  .then(profile => {
    res.render('profiles/show' , {
      profile,
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