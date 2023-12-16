import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'] 
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() settings: string[] = [];
  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

  filteredData: any[] = [];

  ngOnInit() {
    this.filteredData = [...this.data];
  }

  onRowClick(item: any) {
    this.rowClicked.emit(item);
  }

  onFilterChange(column: string, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.filteredData = this.data.filter(item => {
      const itemValue = item[column].toString().toLowerCase();
      return itemValue.includes(value.toLowerCase());
    });
  }
}