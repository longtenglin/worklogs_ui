import { Component } from '@angular/core';
import {WorkLogItemComponent} from './components/work-log-item/work-log-item.component';

@Component({
  selector: 'app-work-log-list',
  imports: [
    WorkLogItemComponent,
  ],
  templateUrl: './work-log-list.component.html',
  standalone: true,
  styleUrl: './work-log-list.component.scss'
})
export class WorkLogListComponent {

  onSelectionChange(event: any) {
    console.log(event);
  }
}
