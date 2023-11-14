import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KanbanComponent } from './kanban/kanban.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TasklistComponent } from './tasklist/tasklist.component';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

const routes: Routes = [
  { path: '', component: KanbanComponent },
  {
    path: '',
    component: TasklistComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
    canActivate: [ AuthGuardService ]
  },
];
