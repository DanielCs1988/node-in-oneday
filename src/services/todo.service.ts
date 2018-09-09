import { injectable } from "inversify";
import { Todo } from "../models/todo.model";

@injectable()
export class TodoService {

    public getAllTodos = () => {
        return Todo.find({});
    };

    public getTodoById = (id: string) => {
        return Todo.findById(id);
    };

    public createTodo = async (text: string) => {
        const todo = new Todo({ text });
        return todo.save();
    };

    public deleteTodo = (id: string) => {
        return Todo.findByIdAndRemove(id);
    };

    public updateTodo = async (id: string, text: string) => {
        return Todo.findByIdAndUpdate(id, { text }, { new: true });
    };

    public toggleTodo = async (id: string) => {
        const todo = await Todo.findById(id);
        if (todo) {
            todo.completed = !todo.completed;
            return todo.save();
        }
        throw new Error('Todo not found!');
    };
}