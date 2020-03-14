import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Roast } from 'src/shared/roast';
import { RoastService } from './roast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RoastService]
})

export class AppComponent {
  title = 'roast';

  constructor( ) { }

}
