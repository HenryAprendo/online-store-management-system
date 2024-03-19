import { Component, OnInit, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../../../models/product.model';
import { Action } from '../../../../models/actions';

import { itemInOut } from '../../../../core/animations/item-enter-leave';
import { FormDialogPageComponent } from '../../../../shared/pages/form-dialog-page/form-dialog-page.component';

import { ProductService } from '../../../../services/product.service';
import { DialogService } from '../../../../services/dialog.service';
import { UniqueIdService } from '../../../../services/unique-id.service';

import { ProductFormComponent } from './../../components/product-form/product-form.component';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '../../../../shared/components/search/search.component';
import { BtnCreateComponent } from '../../../../shared/components/btn-create/btn-create.component';
import { SearchContentComponent } from '../../../../shared/components/search-content/search-content.component';
import { TableContentComponent } from '../../../../shared/components/table-content/table-content.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormDialogPageComponent, ProductFormComponent, RouterLink, SearchComponent, BtnCreateComponent, SearchContentComponent, TableContentComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  animations: [itemInOut]
})
export class ProductsComponent implements OnInit {

  private dialogService = inject(DialogService);

  private productService = inject(ProductService);

  private uniqueIdService = inject(UniqueIdService);

  columnsTitle: string[] = ['Edit','Title','Price','Category','Rate','Count','Details'];

  products: Product[] = [];

  filterProducts:Product[] = [];

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
          console.log(error.name);
        }
      });

  }

  filterList(text:string){
    this.filterProducts = this.products.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
  }

  closeDialog(){
    this.dialogService.closeDialogBox();
    this.uniqueIdService.restart();
  }

  createForm(){
    this.dialogService.handleCreate();
  }

  editForm(id:number){
    this.uniqueIdService.emitId(id);
    this.dialogService.handleEdit();
  }



}





