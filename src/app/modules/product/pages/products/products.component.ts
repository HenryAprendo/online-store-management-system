import { Component, OnInit, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { Product } from '../../../../models/product.model';
import { Action } from '../../../../models/actions';

import { itemInOut } from '../../../../core/animations/item-enter-leave';
import { FormDialogPageComponent } from '../../../../shared/pages/form-dialog-page/form-dialog-page.component';

import { ProductService } from '../../../../services/product.service';
import { DialogService } from '../../../../services/dialog.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, FormDialogPageComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  animations: [itemInOut]
})
export class ProductsComponent implements OnInit {

  private dialogService = inject(DialogService);

  private productService = inject(ProductService);

  products: Product[] = [];

  filterProducts:Product[] = [];

  search = new FormControl();

  action:Signal<Action> = this.dialogService.action;

  state:Signal<boolean> = this.dialogService.state;

  ngOnInit(): void {
    this.productService.findAll()
      .subscribe({
        next: (data:Product[]) => {
          this.products = [...data];
          this.filterProducts = [...this.products];
        },
        error: (error:Error) => {
          console.log(error);
        }
      });

    this.search.valueChanges
      .subscribe((text:string) => {
        this.filterProducts = this.products.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
      });

  }

  closeDialog(){
    this.dialogService.closeDialogBox();
  }

  createForm(){
    this.dialogService.handleCreate();
  }

  editForm(){
    this.dialogService.handleEdit();
  }



}





