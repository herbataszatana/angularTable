import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'] // Include your CSS styles here
})
export class TableComponent {
  @Input() data: any[] = []; // Input property to receive the data
  @Input() settings: string[] = []; // Input property to define columns to display
  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>(); // Event emitter for row click

  onRowClick(item: any) {
    this.rowClicked.emit(item); // Emitting the clicked item object
  }
}
