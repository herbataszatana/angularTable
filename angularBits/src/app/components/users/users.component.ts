import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  fetchedData = [
    { name: 'John', lastname: 'Doe', dob: '13/12/88', id: '8693' },
    { name: 'Jane', lastname: 'Doe', dob: '13/12/80', id: '8603' },
    // Add more data if needed
  ];

  tableSettings = ['name', 'lastname', 'dob']; // Define columns to display

  onItemClicked(item: any) {
    console.log('Clicked item:', item); // Perform actions based on the clicked item
    // Add your logic here to handle item clicks in UserComponent
  }
}
