import {animate, animation, style} from '@angular/animations';

const SHOW_ENTER = animation([
  style({height: '0'}),
  animate('.5s ease-in-out', style({height: '*'}))
])

const HIDDEN_LEAVE = animation([
  style({height: '*'}),
  animate('.5s ease-in-out', style({height: '0'}))
])

export const LTL_ANIMATION = {
  SHOW_ENTER: SHOW_ENTER,
  HIDDEN_LEAVE: HIDDEN_LEAVE
}
