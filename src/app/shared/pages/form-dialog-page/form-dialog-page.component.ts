import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Action } from '../../../models/actions';
import { dialogInOut } from '../../../core/animations/dialog';
import { ProductFormComponent } from '../../../modules/product/components/product-form/product-form.component';
import { UserFormComponent } from '../../../modules/user/components/user-form/user-form.component';

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

  @ContentChild('cmp') form!: ProductFormComponent | UserFormComponent;

  closeDialog(){
    this.close.emit();
  }

  save(){
    this.form.save();
  }

  update(){
    this.form.update();
  }

  delete(){
    this.form.delete();
  }

}




