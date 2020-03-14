import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoastService } from '../roast.service';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  currentRoast;
  displayRoast;

  constructor(
    private roastService: RoastService,
    private apiService: ApiService
  ) {
      roastService.selectedRoast$
      .pipe(
        tap(data => {
          this.currentRoast = data;
        })
      ).subscribe(
        data => {
        this.apiService.getRoast(this.currentRoast).subscribe(
          roastData => this.displayRoast = roastData
        );
      });

    }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
