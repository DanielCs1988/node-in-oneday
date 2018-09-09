import {
    controller,
    httpDelete,
    httpGet,
    httpPost,
    httpPut,
    interfaces,
    queryParam,
    requestParam
} from "inversify-express-utils";
import {inject} from "inversify";
import {TodoService} from "../services/todo.service";

@controller('/todos')
export class TodoController implements interfaces.Controller {

    constructor(@inject('TodoService') private todoService: TodoService) { }

    @httpGet('/')
    private get() {
        return this.todoService.getAllTodos();
    }

    @httpGet('/:id')
    private getByid(@requestParam('id') id: string) {
        return this.todoService.getTodoById(id);
    }

    @httpPost('/')
    private async post(@queryParam('text') text: string) {
        return this.todoService.createTodo(text);
    }

    @httpPut('/:id')
    private async put(@requestParam('id') id: string, @queryParam('text') text: string) {
        if (text) {
            return this.todoService.updateTodo(id, text);
        }
        return this.todoService.toggleTodo(id);
    }

    @httpDelete('/:id')
    private async delete(@requestParam('id') id: string) {
        return this.todoService.deleteTodo(id);
    }
}