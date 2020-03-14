import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Roast } from 'src/shared/roast';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() roast = new EventEmitter<string>();
  title = 'roast';
  roasts: Roast[];

  constructor(
    private apiService: ApiService,
  ) { }

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
    console.log(roast);
    this.roast.emit(roast);
  }
}
