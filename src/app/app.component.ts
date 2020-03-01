import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Roast } from 'src/shared/roast';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'roast';
  roasts: Roast[];

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    this.getRoasts();
  } 

  getRoasts() {
    this.apiService.getRoasts()
    .subscribe(
      data => this.roasts = data
    )
  }
}
