import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-dialog-page',
  standalone: true,
  imports: [],
  templateUrl: './form-dialog-page.component.html',
  styleUrl: './form-dialog-page.component.scss'
})
export class FormDialogPageComponent {

  @Input() title: string = 'Producto';

  @Output() close = new EventEmitter();

  closeDialog(){
    this.close.emit();
  }

}
