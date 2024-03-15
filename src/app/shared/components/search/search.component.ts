import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  search = new FormControl();

  @Output() inputText = new EventEmitter<string>();

  sendEv(text:string){
    this.inputText.emit(text);
  }

  ngOnInit(): void {
    this.search.valueChanges
      .subscribe(value => {
          this.sendEv(value);
      });
  }

}
