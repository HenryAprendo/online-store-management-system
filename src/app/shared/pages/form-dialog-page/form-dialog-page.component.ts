import { Component, EventEmitter, Input, Output, Type, input } from '@angular/core';
import { Functionality } from '../../../models/functionality';

@Component({
  selector: 'app-form-dialog-page',
  standalone: true,
  imports: [],
  templateUrl: './form-dialog-page.component.html',
  styleUrl: './form-dialog-page.component.scss'
})
export class FormDialogPageComponent {

  @Input() behavior: Functionality = 'create';

  @Input() title: string = 'Producto';

  @Output() close = new EventEmitter();

  closeDialog(){
    this.close.emit();
  }

}
