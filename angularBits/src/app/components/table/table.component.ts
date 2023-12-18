import { Component, Input, Output, EventEmitter,  } from '@angular/core';
import { ActionDisplayType } from '../users/users.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'] 
})
export class TableComponent {

  @Input() data: any[] = [];
  @Input() settings: string[] = [];
  @Input() columnDisplayNames: { [key: string]: { label: string, displayType: ActionDisplayType, icon?: string }[] } = {};

  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() actionClicked: EventEmitter<{ action: string, item: any }> = new EventEmitter<{ action: string, item: any }>();

  filteredData: any[] = [];
  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

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

  onActionClick(action: string, item: any) {
    this.actionClicked.emit({ action: action, item: item });
  }
  onHeaderClick(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.sortData();
  }

  sortData() {
    if (this.sortColumn !== null) {
      this.filteredData.sort((a, b) => {
        const valueA = a[this.sortColumn!];
        const valueB = b[this.sortColumn!];

        if (valueA < valueB) {
          return this.sortDirection === 'asc' ? -1 : 1;
        } else if (valueA > valueB) {
          return this.sortDirection === 'asc' ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
  }
}
