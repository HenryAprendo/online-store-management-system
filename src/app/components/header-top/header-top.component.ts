import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [],
  templateUrl: './header-top.component.html',
  styleUrl: './header-top.component.scss'
})
export class HeaderTopComponent {

  @Input() state = false;

  @Output() toggleState = new EventEmitter();

  changeState(){
    this.toggleState.emit();
  }

}
