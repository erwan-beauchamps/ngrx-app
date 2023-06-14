import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor() {}

  canDeactivate(): Observable<boolean> | boolean {
    const confirmation = window.confirm('Etes vous sûr de vouloir partir ?');
    return of(confirmation);
  }

}
