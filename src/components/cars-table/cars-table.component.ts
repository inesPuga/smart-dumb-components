import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICar } from '../../services/cars.service';

@Component({
  selector: 'atl-cars-table',
  standalone: true,
  imports: [],
  templateUrl: './cars-table.component.html',
  styleUrl: './cars-table.component.css'
})
export class CarsTableComponent {

  @Input() cars: ICar[] = [];
  @Output() onRemove: EventEmitter<number> = new EventEmitter();

  removeHandler(id: number): void {
    this.onRemove.emit(id);
  }
  
}
