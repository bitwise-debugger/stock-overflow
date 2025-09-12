import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "You must enter a name"],
    },
    email: {
        type: String,
        trim: true,
        required: [true, "You must enter a email"],
        unique: [true, "Email already registered"],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "You must enter a password"],
        minLength: [6, "Password should be at least 6 characters"],
    },
    phone: {
        type: String,
        trim: true,
        required: [true, "You must enter a phone number"],
    },
    image: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    role: {
        type: String,
        enum: ['admin', 'manager', 'staff'],
        default: 'staff',
    },
    provider: {
        type: String,
        default: 'local',
    },
    providerId: {
        type: String,
    },
    lastLogin: {
        type: Date,
    }
}, { timestamps: true });


export const User = mongoose.models.User || mongoose.model('User', userSchema);
