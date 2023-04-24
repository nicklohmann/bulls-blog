import { Router } from 'express'
import * as tagsCtrl from "../controllers/tags.js"

const router = Router()

// GET localhost:3000/tags
router.get('/new' , tagsCtrl.new)

router.post('/' , tagsCtrl.create)



export { router }
