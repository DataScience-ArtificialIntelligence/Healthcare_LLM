import mongoose, { Schema, model } from 'mongoose';

const responseSchema = new Schema({
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
    },
    repliedAt: {
        type: Date,
        default: Date.now(),
    },
    text: {
        type: String,
        required: true,
    },
    generatedBy: {
        type: String,
        required: true,
        default: '',
    },
});

const Response = model('Response', responseSchema);

export default Response;
