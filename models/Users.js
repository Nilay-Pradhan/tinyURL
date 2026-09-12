import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        firstName:{
            type: String,
            required: [true, 'First Name is required'],
        },
        lastName:{
            type: String,
            required: [true, 'Last Name is required'],
        },
        userName:{
            type: String,
            required: [true, 'Username is required'],
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        phone:{
            type: String,
            trim: true,
        },
        country:{
            type: String,
            required: [true, 'Country name is required'],
            lowercase: true,
            trim: true,
        },
        email:{
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
            index: true,
        },
        status:{
            type: String,
            enum: ['active', 'inactive', 'suspended', 'pending_verification'],
            default: 'active',
            required: true,
            index: true
        },
        lastLogin: {
            type: Date
        }
    },
    {
        timestamps: true,
    }
);

const User = model('users', userSchema);

export default User