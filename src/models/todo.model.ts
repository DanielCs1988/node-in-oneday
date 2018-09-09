import {Document, model, Schema} from 'mongoose';

export interface TodoModel extends Document {
    text: string;
    completed: boolean;
}

const TodoSchema = new Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

export const Todo = model<TodoModel>('Todo', TodoSchema);