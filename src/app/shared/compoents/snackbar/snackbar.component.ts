import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit, OnDestroy {
  show = false;
  time = 3000;
  message = 'This is a snackbar';
  isSuccess = true;

  private snackbarSubscription: Subscription;

  constructor(private snackbarService: SnackbarService) {
    this.snackbarSubscription = this.snackbarService
      .getSnackbarListener()
      .subscribe((data) => {
        this.time = data.time;
        this.message = data.message;
        this.isSuccess = data.isSuccess;
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, this.time);
      });
  }

  ngOnInit(): void {
    return;
  }

  hideSnackbar(): void {
    this.show = false;
  }

  ngOnDestroy(): void {
    this.snackbarSubscription.unsubscribe();
  }
}
