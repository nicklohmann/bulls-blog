import { Router } from 'express'
import * as blogsCtrl from '../controllers/blogs.js'

const router = Router()
//GET
router.get('/' , blogsCtrl.index)
router.get('/new' , blogsCtrl.new)
router.get('/:blogId' , blogsCtrl.show)


//POST
router.post('/' , blogsCtrl.create)

export {
  router,
}