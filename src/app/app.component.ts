import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { menuInOut } from './core/animations/menu-enter-leave';

import { FormDialogPageComponent } from './shared/pages/form-dialog-page/form-dialog-page.component';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderTopComponent, SideMenuComponent, FormDialogPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [menuInOut]
})
export class AppComponent {

  menuStatus = signal(false);

  toggleMenu(){
    this.menuStatus.update(state => !state);
  }


}

// Observables
const observable = new Observable((subscriber: Subscriber<number> ) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
})

const observer = {
  next: (value:number) => console.log(value),
  error: (err:Error) => console.log('Error ocurred'),
  complete: () => console.log('Done')
}

observable.subscribe(observer)



















