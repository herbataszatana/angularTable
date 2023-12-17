import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  fetchedData = [
    { name: 'John', lastname: 'Holt', dob: '13/12/88', id: '8693' },
    { name: 'Anna', lastname: 'Doe', dob: '07/06/95', id: '8605' },
    { name: 'Jane', lastname: 'Smith', dob: '13/12/80', id: '8603' },
    { name: 'Sam', lastname: 'Idol', dob: '04/01/91', id: '8693' },
    { name: 'Jimmy', lastname: 'Peralta', dob: '30/11/88', id: '8603' },
    { name: 'Jimmy', lastname: 'Jones', dob: '05/10/78', id: '8603' },
  ];

  columnDisplayNames: { [key: string]: string[] } = {
    'name': [],
    'lastname': [],
    'dob': [],
    'actions': ['Update', 'Delete'] // Actions for the 'actions' column
  };

  tableSettings = ['name', 'lastname', 'dob', 'actions'];

  onActionClicked(action: string, item: any) {
    console.log(`Clicked action '${action}' for item:`, item);
    // Perform action based on the action type and item data
    // Add your logic here to handle different actions
  }

  onItemClicked(item: any) {
    console.log('Clicked item:', item); 
  }
}