import { Component } from '@angular/core';
import {LogItemHeaderComponent} from '../log-item-header/log-item-header.component';
import {MatCard} from '@angular/material/card';
import {LogType} from '../../../../common/ltl-log-type/ltl-log-type.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-work-log-item',
  imports: [
    LogItemHeaderComponent,
    MatCard,
    NgIf
  ],
  templateUrl: './work-log-item.component.html',
  standalone: true,
  styleUrl: './work-log-item.component.scss'
})
export class WorkLogItemComponent {

  protected readonly LogType = LogType;

  isExpanded = false;

  isExpandChange(event: boolean) {
    this.isExpanded = event;
  }
}
