import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ltl-log-type',
  imports: [],
  templateUrl: './ltl-log-type.component.html',
  standalone: true,
  styleUrl: './ltl-log-type.component.scss'
})
export class LtlLogTypeComponent {
  @Input() type: LogType = LogType.BUG;
}

export enum LogType {
  BUG = 'BUG'
  , TASK = 'TASK'
  , QA = 'QA'
}
