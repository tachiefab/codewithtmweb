import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationPageComponent } from './notification-page/notification-page.component';


const routes: Routes = [
  {
    path: '', 
    component: NotificationPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }

