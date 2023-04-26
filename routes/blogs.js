import { Router } from 'express'
import * as blogsCtrl from '../controllers/blogs.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()
//GET
router.get('/' , blogsCtrl.index)
router.get('/new', isLoggedIn , blogsCtrl.new)
router.get('/:blogId' , blogsCtrl.show)
router.get('/:blogId/edit', isLoggedIn , blogsCtrl.edit)
router.get('/:blogId/comments/:commentId/edit' , isLoggedIn , blogsCtrl.editComment)
//POST
router.post('/:blogId/comments' , isLoggedIn, blogsCtrl.addComment)
router.post('/' , isLoggedIn, blogsCtrl.create)
router.post('/:blogId/tags', isLoggedIn , blogsCtrl.addTagToPost)
router.put('/:blogId' , isLoggedIn, blogsCtrl.update)
router.put('/:blogId/comments/:commentId' , isLoggedIn , blogsCtrl.updateComment)
//DELETE
router.delete('/:blogId' ,isLoggedIn, blogsCtrl.delete)
router.delete('/:blogId/comments/:commentId' ,isLoggedIn, blogsCtrl.deleteComment)



export {
  router,
}