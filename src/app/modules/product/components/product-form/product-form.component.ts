import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpBasic } from '../../../../models/http-form.model';
import { UniqueIdService } from '../../../../services/unique-id.service';
import { ProductService } from '../../../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements HttpBasic, OnInit, OnDestroy {

  private fb = inject(FormBuilder);

  private uniqueIdService = inject(UniqueIdService);

  private productService = inject(ProductService);

  form!:FormGroup;

  private subscribeGetId!: Subscription;

  constructor(){
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.subscribeGetId = this.uniqueIdService.getId()
      .subscribe(id => {
        this.productService.findOne(id).subscribe(data => console.log(data));
      });
  }

  buildForm(){
    return this.fb.group({
      title: ['',[Validators.required]],
      price: [0,[Validators.required]],
      description: ['',[Validators.required]],
      image: ['',[Validators.required]],
      category: ['',[Validators.required]]
    });
  }

  save(){
    console.log('Crear un producto');
  }

  update(): void {
    throw new Error('Method not implemented.');
  }

  delete(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    this.subscribeGetId.unsubscribe();
  }

}





