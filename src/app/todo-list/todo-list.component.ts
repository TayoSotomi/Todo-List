import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
      
  TodoList:Todo[]=[
    {
      task: "fold clothes",
      completed: true
    },
    {
      task: "Put clothes in dresser",
      completed: true
    },
    {
      task: "relax",
      completed: true
    },
    {
      task: "try to pet cat",
      completed: false
    },
    {
      task: "pet dog",
      completed: true
    },
    {
      task: "be awesome",
      completed: true
    },
  ];

  newTodo:Todo={
    task:"",
    completed:true
  };

  addTolist(){
    let result:Todo= {
      task: this.newTodo.task,
      completed: this.newTodo.completed
    };
    this.TodoList.push(result);
  };

  removeFromList(index:number){
    this.TodoList.splice(index,1);
  };

  FilterList():Todo[]{
     let Completed = true;
     let NotCompleted = false;
    return this.TodoList.filter((e:Todo)=> e.completed == Completed|| e.completed == NotCompleted);
  }


}

