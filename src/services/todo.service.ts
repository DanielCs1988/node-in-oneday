import { injectable } from "inversify";
import {TodoModel} from "../models/todo.model";

@injectable()
export class TodoService {

    private todos: TodoModel[] = [
        {
            _id: 'abc',
            text: 'Learn Node in 1 day',
            completed: true
        },
        {
            _id: 'def',
            text: 'Write unit tests',
            completed: false
        }
    ];

    public getAllTodos = () => {
        return this.todos;
    };

    public getTodoById = (id: string) => {
        return this.todos.find(todo => todo._id === id);
    };

    public createTodo = (todo: TodoModel) => {
        this.todos.push(todo);
        return todo;
    };

    public deleteTodo = (id: string) => {
        const todo = this.getTodoById(id);
        this.todos = this.todos
            .filter(todo => todo._id !== id);
        return todo;
    };

    public updateTodo = (id: string, text: string) => {
        this.todos = this.todos
            .map(todo => todo._id === id ? { ...todo, text } : todo);
        return this.getTodoById(id);
    };

    public toggleTodo = (id: string) => {
        this.todos = this.todos
            .map(todo => todo._id === id ? { ...todo, completed: !todo.completed } : todo);
        return this.getTodoById(id);
    };
}