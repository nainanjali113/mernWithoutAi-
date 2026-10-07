import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

export const userSchema = new mongoose.Schema({
    profileImg: { type: Object },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: [{
        state: { type: String, required: true },
        city: { type: String, required: true },
        pincode: { type: Number, required: true },
        street: { type: String, required: true },
        landmark: { type: String, required: true },
        phone: { type: Number, required: true, unique: true },
    }],
    isAddress: { type: Boolean, default: false },
    role: { type: String, enum: ['user', 'admin'], default: 'user', required: true },
    orderid: [{ type: mongoose.Schema.Types.ObjectId, ref: 'order' }],
    cartId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cart' }],
    verification: {
        user: {
            isDeleted: { type: Boolean, default: false },
            isVerified: { type: Boolean, default: false },
            isBlocked: { type: Boolean, default: false },
            reason: { type: String, default: null },
            otp: { type: Number, default: null },
            otpAtm: { type: Number, default: 3 },
            lockTime: { type: Date, default: null }
        },
        admin: {
            otp: { type: Number, default: null },
            otpAtm: { type: Number, default: 3 },
        }
    },
    login_info: [{ logIn_time: Date, deviceName: String, location: Object }]
},
    { timestamps: true }
)


export const user_schema = mongoose.model("user", userSchema);