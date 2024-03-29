import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject, signal } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpBasic } from '../../../../models/http-form.model';
import { UniqueIdService } from '../../../../services/unique-id.service';
import { ProductService } from '../../../../services/product.service';
import { CategoryService } from '../../../../services/category.service';
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

  private categoryService = inject(CategoryService);

  form!:FormGroup;

  private subscribeGetId!: Subscription;

  private productId = signal(0);

  categories: string[] = [];

  @ViewChild('trigger') btnTrigger!: ElementRef<HTMLButtonElement>;

  constructor(){
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.subscribeGetId = this.uniqueIdService.getId()
      .subscribe(id => this.productId.set(id));

    if(this.productId() >= 0){
      this.initForm();
    }

    this.categoryService.findAll()
      .subscribe(dta => {
        this.categories = dta;
      });

  }

  proccessForm(){

    if(this.form.valid){

      const data = this.form.value;
      const id = this.productId();

      if(this.productId() >= 0){
        // Actualizar
        this.productService.update(id,data)
          .subscribe(dta => {
            console.log(dta);
          });
      } else {
        // Crear
        this.productService.save(data)
          .subscribe(dta => {
            console.log(dta);
          });
      }

    } else {
      this.form.markAllAsTouched();
    }

  }

  private initForm(){
    const id = this.productId();
    this.productService.findOne(id)
      .subscribe(dta => {
        this.form.setValue({
          title: dta.title,
          price: dta.price,
          description: dta.description,
          image: dta.image,
          category: dta.category
        });
      });
  }

  private buildForm(){
    return this.fb.group({
      title: ['',[Validators.required]],
      price: [0,[Validators.required]],
      description: ['',[Validators.required]],
      image: ['',[Validators.required]],
      category: ['',[Validators.required]]
    });
  }

  save(){
    this.btnTrigger.nativeElement.click();
  }

  update(): void {
    this.btnTrigger.nativeElement.click();
  }

  delete(): void {
    this.productService.delete(this.productId()).subscribe(console.log)
  }

  ngOnDestroy(): void {
    this.subscribeGetId.unsubscribe();
  }

}
