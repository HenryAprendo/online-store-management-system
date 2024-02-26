import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { menuInOut } from './core/animations/menu-enter-leave';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderTopComponent, SideMenuComponent],
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
