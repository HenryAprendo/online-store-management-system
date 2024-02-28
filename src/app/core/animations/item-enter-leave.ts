import { animate, style, transition, trigger } from "@angular/animations";

export const itemInOut = trigger('itemInOut',[

  transition(':enter',[
    style({ opacity: 0 }),
    animate('300ms ease-in', style({ opacity: 1}))
  ]),

  transition(':leave',[
    animate('400ms 200ms ease-out', style({ opacity: 0 })),
  ]),

]);
