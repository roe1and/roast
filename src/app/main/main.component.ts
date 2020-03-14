import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoastService } from '../roast.service';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';

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
    roastService.selectedRoast$.subscribe(
      data => {
        this.currentRoast = data;
      });
    this.apiService.getRoasts()
    .subscribe(
      data => this.displayRoast = data
    )
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
