import express from 'express'
import { user_authenticate, user_authorization } from '../middleware/auth.js'
import { create_user, verify_otp, resend_otp, login, update_profile, get_all_user } from '../controller/user_controller.js'

export const user_routes = express.Router()

// Public Api not use Auth
user_routes.post('/create_user', create_user)
user_routes.post('/verify_otp', verify_otp)
user_routes.post('/resend_otp', resend_otp)
user_routes.post('/login', login)

// Api to get all users
user_routes.get('/all_users', get_all_user)


// Private Api use Auth
user_routes.post('/update_profile', user_authenticate, user_authorization, update_profile)


