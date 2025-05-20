import { Component } from '@angular/core';
import {LogItemHeaderComponent} from '../log-item-header/log-item-header.component';

@Component({
  selector: 'app-work-log-item',
  imports: [
    LogItemHeaderComponent
  ],
  templateUrl: './work-log-item.component.html',
  standalone: true,
  styleUrl: './work-log-item.component.scss'
})
export class WorkLogItemComponent {

}
