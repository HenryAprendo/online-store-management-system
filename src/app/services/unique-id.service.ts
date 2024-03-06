import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  private initVal = -1;

  private id = new BehaviorSubject<number>(this.initVal);

  private id$ = this.id.asObservable();

  constructor() { }

  emitId(id:number){
    this.id.next(id);
  }

  getId(): Observable<number> {
    return this.id$;
  }

  restart(){
     this.emitId(this.initVal);
  }

}
