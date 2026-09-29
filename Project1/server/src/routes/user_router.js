import express from 'express'
import { create_user } from '../controller/user_controller.js'

export const user_routes = express.Router()

user_routes.get('/create', create_user)
