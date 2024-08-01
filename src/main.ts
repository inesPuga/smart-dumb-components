import { Component, signal, WritableSignal, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { CarsService, ICar } from './services/cars.service';
import { CarsTableComponent } from './components/cars-table/cars-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Smart & Dumb components</h1>
    
    <atl-cars-table [cars]="$cars()" (onRemove)="removeHandler($event)"></atl-cars-table>

  `,
  imports: [ CarsTableComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class App implements OnInit {
  name = 'Angular';

  $cars: WritableSignal<ICar[]> = signal([]);

  constructor(private readonly carsService: CarsService) {}

  ngOnInit(): void {
    this.carsService.getCars().subscribe(cars => this.$cars.set(cars));
  }

  removeHandler(id: number): void {
    this.$cars.update(cars => {
      return cars.filter(car => car.id !== id)
    });
  }
}

bootstrapApplication(App);
