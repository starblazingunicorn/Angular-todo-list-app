import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AppComponent } from './app.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: 'app',
    component: AppComponent,
  },
  {
    path: 'item',
    component: TaskItemComponent,
  },
  {
    path: 'list',
    component: TaskListComponent,
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
