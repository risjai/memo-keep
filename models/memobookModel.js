import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for memos
 */
const MemoScheme = new Schema({
    title: {
        type: String,
        required: "What is the 's title?"
    },
    text: {
        type: String,
        required: "What is the memo?"
    },
    date: {
        type: Date,
        default: new Date
    }
});

export default mongoose.model('Memo', MemoScheme);