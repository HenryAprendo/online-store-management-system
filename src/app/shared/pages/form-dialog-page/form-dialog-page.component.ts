import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action } from '../../../models/actions';
import { dialogInOut } from '../../../core/animations/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-dialog-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-dialog-page.component.html',
  styleUrl: './form-dialog-page.component.scss',
  animations: [dialogInOut]
})
export class FormDialogPageComponent {

  @Input() behavior: Action = 'create';

  @Input() title: string = 'Producto';

  @Output() close = new EventEmitter();

  closeDialog(){
    this.close.emit();
  }

}
