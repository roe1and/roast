import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Roast } from 'src/shared/roast';
import { RoastService } from '../roast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  title = 'roast';
  roasts: Roast[];
  selectedRoast: string;
  subscription: Subscription;

  constructor(
    private apiService: ApiService,
    private roastService: RoastService
  ) {     
    roastService.selectedRoast$.subscribe(
        roast => {
        this.selectedRoast = roast;
    });
  }

  ngOnInit(): void {
    this.getRoasts();
  }

  getRoasts() {
    this.apiService.getRoasts()
    .subscribe(
      data => this.roasts = data
    )
  }
  
  selectRoast(roast: string) {
    this.roastService.selectRoast(roast);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
