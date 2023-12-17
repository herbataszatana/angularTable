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
    'name': ['First Name'],
    'lastname': ['Last Name'],  
    'dob': ['Date of Birth'], 
    'actions': ['Send', 'Delete']   
  };
  tableSettings = ['name', 'lastname', 'dob', 'actions'];

  onActionClicked(action: string, item: any) {
    console.log(`Clicked action '${action}' for item:`, item);

  }

  onItemClicked(item: any) {
    console.log('Clicked item:', item); 
  }
}