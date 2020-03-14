import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoastService {

  private selectedRoastSource = new Subject<string>();

  selectedRoast$ = this.selectedRoastSource.asObservable();

  selectRoast(roast: string) {
    this.selectedRoastSource.next(roast);
  }

}