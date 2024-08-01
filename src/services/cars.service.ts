import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ICar {
  id: number;
  name: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() {}

  getCars(): Observable<ICar[]> {
    return of([
      {
        id: 1,
        name: 'PORSCHE 911 Turbo S',
        year: 2020
      },
      {
        id: 2,
        name: 'Audi RS e-tron GT',
        year: 2021
      }
    ]);
  }

}