import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormControl } from '@angular/forms';
import { itemInOut } from '../../core/animations/item-enter-leave';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  animations: [itemInOut]
})
export class ProductsComponent implements OnInit {

  private productService = inject(ProductService);

  products: Product[] = [];

  filterProducts:Product[] = [];

  search = new FormControl();

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

}
