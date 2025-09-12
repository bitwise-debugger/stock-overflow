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
    role: {
        type: String,
        enum: ['admin', 'manager', 'staff'],
        default: 'staff',
    },
    provider: {
        type: String,
        default: 'local',
        enum: ['local', 'google'],
    },
    providerId: {
        type: String,
    },
    lastLogin: {
        type: Date,
    }
}, { timestamps: true });

let User = mongoose.models?.User;
if (!User) {
    User = mongoose.model('User', userSchema);
}

export default User;
