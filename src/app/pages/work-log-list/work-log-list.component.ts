import { Component } from '@angular/core';
import {WorkLogItemComponent} from './components/work-log-item/work-log-item.component';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-work-log-list',
  imports: [
    WorkLogItemComponent,
    MatSelect,
    MatOption
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
