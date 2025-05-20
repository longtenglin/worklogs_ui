import { Component } from '@angular/core';
import {LtlLogTypeComponent} from '../../../../common/ltl-log-type/ltl-log-type.component';
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
export class LogItemHeaderComponent {

}
