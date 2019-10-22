import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private id: number = 1;
  constructor() { }

  add(title: string) {
    const item: Todo = {
      title, id: this.id, isDone: false, isDoing: false
    };
    this.todos.push(item);
    this.id ++;
  }
  delete(item: Todo) {
    const index = this.todos.indexOf(item);
    this.todos.splice(index, 1);
  }
  list() {
    return this.todos;
  }
}
