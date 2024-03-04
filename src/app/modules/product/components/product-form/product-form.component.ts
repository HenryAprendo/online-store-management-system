import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpBasic } from '../../../../models/http-form.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements HttpBasic {

  private fb = inject(FormBuilder);

  form!:FormGroup;

  constructor(){
    this.form = this.buildForm();
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
}





