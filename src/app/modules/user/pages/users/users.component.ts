import { Component, OnInit, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.model';
import { itemInOut } from '../../../../core/animations/item-enter-leave';
import { TableContentComponent } from '../../../../shared/components/table-content/table-content.component';
import { SearchComponent } from '../../../../shared/components/search/search.component';
import { SearchContentComponent } from '../../../../shared/components/search-content/search-content.component';
import { BtnCreateComponent } from '../../../../shared/components/btn-create/btn-create.component';
import { DialogService } from '../../../../services/dialog.service';
import { UniqueIdService } from '../../../../services/unique-id.service';
import { FormDialogPageComponent } from '../../../../shared/pages/form-dialog-page/form-dialog-page.component';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { Action } from '../../../../models/actions.model';
import { DialogHandle } from '../../../../shared/interfaces/dialog-handle';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TableContentComponent, SearchContentComponent, SearchComponent, BtnCreateComponent, FormDialogPageComponent, UserFormComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  animations: [itemInOut]
})
export class UsersComponent implements OnInit, DialogHandle {

  private userService = inject(UserService);

  private dialogService = inject(DialogService);

  private uniqueIdService = inject(UniqueIdService);

  columnsTitle: string[] = ['Edit','firstname','lastname','email','username','phone','city','Details'];

  users: User[] = [];

  filterUser: User[] = [];

  state: Signal<boolean> = this.dialogService.state;

  action: Signal<Action> = this.dialogService.action;

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

  closeDialog(){
    this.dialogService.closeDialogBox();
    this.uniqueIdService.restart();
  }

  createForm(){
    this.dialogService.handleCreate();
  }

  editForm(id:number){
    this.uniqueIdService.emitId(id);
    this.dialogService.handleEdit();
  }

}










