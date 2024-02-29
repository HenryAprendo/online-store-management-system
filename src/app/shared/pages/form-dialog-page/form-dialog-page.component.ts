import { Component, EventEmitter, Input, Output, Type, input } from '@angular/core';

type Functionality = 'create' | 'edit';

@Component({
  selector: 'app-form-dialog-page',
  standalone: true,
  imports: [],
  templateUrl: './form-dialog-page.component.html',
  styleUrl: './form-dialog-page.component.scss'
})
export class FormDialogPageComponent {

  @Input() showButton: Functionality = 'create';

  @Input() title: string = 'Producto';

  @Output() close = new EventEmitter();

  closeDialog(){
    this.close.emit();
  }

}
