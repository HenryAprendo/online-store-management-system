import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/User';
import { itemInOut } from '../../../../core/animations/item-enter-leave';
import { TableContentComponent } from '../../../../shared/components/table-content/table-content.component';
import { SearchComponent } from '../../../../shared/components/search/search.component'
import { SearchContentComponent } from '../../../../shared/components/search-content/search-content.component'

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TableContentComponent, SearchContentComponent, SearchComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  animations: [itemInOut]
})
export class UsersComponent implements OnInit {

  private userService = inject(UserService);

  columnsTitle: string[] = ['Edit','firstname','lastname','email','username','phone','city','Details'];

  users: User[] = [];

  filterUser: User[] = [];

  ngOnInit(): void {
    this.userService.findAll()
      .subscribe({
        next: (data:User[]) => {
          this.users = [...data];
          this.filterUser = [...this.users]
        },
        error: (error:Error) => {
          console.log(error.name);
        }
      });
  }

  filterList(text:string){
    this.filterUser = this.users.filter(item => item.email.toLowerCase().includes(text.toLowerCase()));
  }

}










