import { Schema, model } from 'mongoose';

const urlSchema = new Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            ref: 'users',
            required: true,
        },
        url:{
            type: String,
            required: true
        },
        shortened_url:{
            type: String
        },
        status:{
            type: String,
            enum: ['active', 'inactive', 'suspended'],
            default: 'active',
            required: true,
            index: true
        }
    },
    {
        timestamps: true,
    }
);

const Url = model('urls', urlSchema);
export default Url

