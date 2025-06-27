import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LogType, LtlLogTypeComponent} from '../../../../common/ltl-log-type/ltl-log-type.component';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-log-item-header',
  imports: [
    LtlLogTypeComponent,
    MatIcon,
  ],
  templateUrl: './log-item-header.component.html',
  standalone: true,
  styleUrl: './log-item-header.component.scss'
})
export class LogItemHeaderComponent implements OnInit{

  @Input() logType: LogType = LogType.BUG;

  @Input() defExpStatus: boolean = false;

  @Output() isExpandChange: EventEmitter<boolean> = new EventEmitter();

  protected isExpanded: boolean = false;

  ngOnInit() {
    this.isExpanded = this.defExpStatus;
  }

  isExpandEvent() {
    this.isExpanded = !this.isExpanded;
    this.isExpandChange.emit(this.isExpanded);
  }
}
