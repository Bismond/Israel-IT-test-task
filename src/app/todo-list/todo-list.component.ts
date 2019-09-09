import { Component } from '@angular/core';
import { Todo } from 'src/services/todo';
import { TodoService } from 'src/services/todo.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.scss'],
    providers: [TodoService]
})
export class TodoListComponent {
    newTodo: Todo = new Todo();

    constructor(private todoService: TodoService) { }

    toggleTodoComplete(todo) {
        this.todoService.toggleTodoComplete(todo);
    }

    addTodo() {
        this.todoService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }

    removeTodo(todo) {
        this.todoService.deleteTodoById(todo.id);
    }

    get todos() {
        return this.todoService.getAllTodos();
    }
}
