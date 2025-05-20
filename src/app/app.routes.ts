import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WorkLogListComponent} from './pages/work-log-list/work-log-list.component';

export const routes: Routes = [
  {
    path: '',
    component: WorkLogListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
