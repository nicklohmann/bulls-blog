import { Router } from 'express'
import * as blogsCtrl from '../controllers/blogs.js'

const router = Router()
//GET
router.get('/' , blogsCtrl.index)
router.get('/new' , blogsCtrl.new)
router.get('/:blogId' , blogsCtrl.show)
router.get('/:blogId/edit' , blogsCtrl.edit)

//POST
router.post('/' , blogsCtrl.create)
router.put('/blogs/:blogId' , blogsCtrl.update)


export {
  router,
}