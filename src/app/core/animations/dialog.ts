import { animate, style, transition, trigger } from "@angular/animations";

export const dialogInOut = trigger('dialogInOut',[

    transition(':enter',[
      style({ transform: 'translateX(110%)' }),
      animate('200ms ease-in-out', style({ transform: 'translateX(0)'}))
    ]),

    transition(':leave',[
      animate('100ms ease-out', style({ transform: 'translateX(110%)' }))
    ]),


]);
