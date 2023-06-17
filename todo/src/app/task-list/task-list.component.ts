import { Component } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  text: string = '';
  changeText(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }
  addToDo():void{
    console.log(this.text);
  }
}
