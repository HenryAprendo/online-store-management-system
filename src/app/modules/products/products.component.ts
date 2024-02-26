import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  private productService = inject(ProductService);

  products: Product[] = [];

  ngOnInit(): void {
    this.productService.findAll()
      .subscribe({
        next: (data:Product[]) => {
          console.log(data);
          this.products = [...data];
        },
        error: (error:Error) => {
          console.log(error);
        }
      })
  }

}
