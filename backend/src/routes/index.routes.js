import { Router } from 'express'
import usersRouter from './users.router.js'

const router = Router()

router.use('/api/users', usersRouter)

export default router