import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WorkLogListComponent} from './pages/work-log-list/work-log-list.component';
import {AddWorkLogComponent} from './pages/add-work-log/add-work-log';

export const routes: Routes = [
  {
    path: 'addWorkLog',
    component: AddWorkLogComponent,
  },
  {
    path: 'workLogList',
    component: WorkLogListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
