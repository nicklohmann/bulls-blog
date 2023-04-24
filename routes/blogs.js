import { Router } from 'express'
import * as blogsCtrl from '../controllers/blogs.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()
//GET
router.get('/' , blogsCtrl.index)
router.get('/new' , blogsCtrl.new)
router.get('/:blogId' , blogsCtrl.show)
router.get('/:blogId/edit' , blogsCtrl.edit)

//POST
router.post('/:blogId/comments' , isLoggedIn, blogsCtrl.addComment)
router.post('/' , blogsCtrl.create)
router.post('/:blogId/tags' , blogsCtrl.addTagToPost)
router.put('/:blogId' , isLoggedIn, blogsCtrl.update)

//DELETE
router.delete('/:blogId' , blogsCtrl.delete)


export {
  router,
}