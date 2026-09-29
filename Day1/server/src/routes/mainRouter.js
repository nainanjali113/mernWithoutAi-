import express from 'express'
import {user_routes} from './user_router.js'
import { admin_routes } from './admin_routes.js'

export const routes = express.Router()

routes.use('/user',user_routes)