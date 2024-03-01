import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { Action } from '../models/actions';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private _action: WritableSignal<Action> = signal('initial');

  private dialogBoxStatus: WritableSignal<boolean> = signal(false);

  /**
   * When executed, it changes the boolean state from true to false and vice versa of dialgoBoxStatus.
   */
  private handleDialogBoxStatus(){
    this.dialogBoxStatus.update(status => !status);
  }

  /**
   * Returns a boolean state true if the dialog box is open or false if it is closed.
   * Is updated when there are changes to the dialogBoxStatus property.w
   */
  state = computed(() => this.dialogBoxStatus());

  /**
   * Returns the current action and is updated when there are changes to the _action property.
   */
  action = computed(() => this._action());

  /**
   * Configure the create action on the form and open the dialog box.
   */
  handleCreate() {
    this._action.set('create');
    this.handleDialogBoxStatus();
  }

  /**
   * Configure the edit action on the form and open the dialog box.
   */
  handleEdit() {
    this._action.set('edit');
    this.handleDialogBoxStatus();
  }

  /**
   * Close the dialog box
   */
  closeDialogBox() {
    this.handleDialogBoxStatus();
    this._action.set('initial');
  }

}






