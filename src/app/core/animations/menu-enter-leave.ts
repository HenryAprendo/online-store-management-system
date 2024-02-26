import { style, transition, trigger, animate} from "@angular/animations";

export const menuInOut = trigger('menuInOut',[
  transition(':enter',[
    style({
      transform: 'translateX(-100%)',
    }),
    animate('100ms', style({ transform: 'translateX(0)'}))
  ]),

  transition(':leave',[
    animate('150ms', style({ transform: 'translateX(-100%)'}))
  ])
]);
