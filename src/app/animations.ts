import {animate, state, style, transition, trigger} from '@angular/animations';

export const fadeAnimation = trigger('fade', [
  state('visible', style({opacity: 1, height: '*'})),
  state('hidden', style({opacity: 0, height: '0'})),
  transition('visible <=> hidden', [
    animate('500ms ease-in-out'),
    animate('500ms')
  ])
]);
