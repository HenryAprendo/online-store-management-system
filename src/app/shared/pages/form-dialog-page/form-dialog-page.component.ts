import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Action } from '../../../models/actions.model';
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

  /**
   * Determines the behavior of the dialog box between 'create' and 'edit'
   */
  @Input() behavior: Action = 'create';

  /**
   * Title of the header
   */
  @Input() title: string = 'Producto';

  /**
   * Event for close the dialog box.
   * Used to execute some method in the parent component, on the service DialogService(CloseDialogBox).
   */
  @Output() close = new EventEmitter();

  /**
   * Gets an instance of the component added in the ng-content, which should be marked with a template variable '#cpm'.
   */
  @ContentChild('cmp') form!: ProductFormComponent | UserFormComponent;

  /**
   * Emits a 'close' event, when pressing the cancel button and the close icon.
   */
  closeDialog(){
    this.close.emit();
  }

  /**
   * Executes the save method of the component instance that contains a form.
   */
  save(){
    this.form.save();
  }

  /**
   * Executes the update method of the component instance that contains a form.
   */
  update(){
    this.form.update();
  }

  /**
   * Execute the delete method of the component instance that contains a form.
   */
  delete(){
    this.form.delete();
  }

}




