import { Component, Input, Renderer2 } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(
    private renderer: Renderer2,
    private tasksService: TasksService
  ) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onNewTaskFormPrompt() {
    this.isAddingTask = true;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
