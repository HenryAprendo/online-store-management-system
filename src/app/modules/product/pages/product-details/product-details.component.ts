import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of, switchMap, tap, zipWith } from 'rxjs';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  private route = inject(ActivatedRoute);

  private productService = inject(ProductService);

  productId:number = -1;

  product:Product|undefined;

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap((param:ParamMap) => {
        const id = Number(param.get('id'));
        this.productId = id;
        return this.productService.findOne(id);
      })
    ).subscribe(data => {
      this.product = data;
      console.log(data);
    });

  }

}
