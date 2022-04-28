import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackbarSubject = new Subject<any>();

  constructor() {}

  show(message: string, isSuccess: boolean, time = 3000): void {
    this.snackbarSubject.next({
      message,
      isSuccess,
      time,
    });
  }

  getSnackbarListener(): Observable<any> {
    return this.snackbarSubject.asObservable();
  }
}
