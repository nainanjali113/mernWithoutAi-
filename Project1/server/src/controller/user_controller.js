import { errorhandling } from '../error/all_error.js'
import { user_model } from '../model/user_model.js'
import jsonwebtoken from 'jsonwebtoken'

export const create_user = async (req, res) => {
    try {
        const data = req.body
        const { firstName, lastName, gender, email, password } = data

        // console.log(data);

        const Create_user = await user_model.create(data)
        res.status(200).send({ status: true, success: true, data: Create_user })
    }
    catch (err) { errorhandling(err, res) }
}


export const verify_otp = async (req, res) => {
    try {

    }
    catch (err) { errorhandling(err, res) }
}


export const resend_otp = async (req, res) => {
    try {

    }
    catch (err) { errorhandling(err, res) }
}


export const login = async (req, res) => {
    try {

    }
    catch (err) { errorhandling(err, res) }
}


export const update_profile = async (req, res) => {
    try {

    }
    catch (err) { errorhandling(err, res) }
}



export const get_all_user = async (req, res) => {
    try {
        const DB = await user_model.find().select({ email: 1 }).sort({ createdAt: -1 })

        if (DB.length == 0) return res.status(404).send({ status: false, msg: 'User not found' })
        res.status(200).send({ status: true, data: DB })
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}