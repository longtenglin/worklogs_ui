import { Component } from '@angular/core';
import {WorkLogItemComponent} from './components/work-log-item/work-log-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-work-log-list',
  imports: [
    WorkLogItemComponent,
    NgForOf,
  ],
  templateUrl: './work-log-list.component.html',
  standalone: true,
  styleUrl: './work-log-list.component.scss'
})
export class WorkLogListComponent {

  _worklogs = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
  ]

  onSelectionChange(event: any) {
    console.log(event);
  }
}

