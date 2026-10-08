import express from 'express'
import { create_user, get_all_user } from '../controller/user_controller.js'

export const user_routes = express.Router()

user_routes.get('/create', create_user)
user_routes.get('/all_users', get_all_user)
