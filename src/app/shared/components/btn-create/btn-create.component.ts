import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-create',
  standalone: true,
  imports: [],
  template: `
    <button class="button_create" (click)="create()" >Create</button>
  `,
  styleUrl: './btn-create.component.scss'
})
export class BtnCreateComponent {

  @Output() createEv = new EventEmitter();

  create(){
    this.createEv.emit();
  }

}
