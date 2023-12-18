import { Component, ViewChild } from '@angular/core';
import { TableComponent } from '../table/table.component';

export enum ActionDisplayType {
  BUTTON = 'button',
  STRING = 'string',
  ICON = 'icon'
}

export interface ColumnDisplay {
  headerLabel?: string; 
  actions?: {
    label: string;
    displayType: ActionDisplayType; 
    icon?: string;
  }[];
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  @ViewChild(TableComponent) tableComponent!: TableComponent;
  fetchedData = [
    { name: 'John', lastname: 'Holt', dob: '13/12/88', id: '8693' },
    { name: 'Anna', lastname: 'Doe', dob: '07/06/95', id: '8605' },
    { name: 'Jane', lastname: 'Smith', dob: '13/12/80', id: '8603' },
    { name: 'Sam', lastname: 'Idol', dob: '04/01/91', id: '8693' },
    { name: 'Jimmy', lastname: 'Peralta', dob: '30/11/88', id: '8603' },
    { name: 'Jimmy', lastname: 'Jones', dob: '05/10/78', id: '8603' },
  ];

  columnDisplayNames: { 
    [key: string]: ColumnDisplay  
  } = {

    name: {
      headerLabel: 'First Name',
    },
    lastName: {
      headerLabel: 'Last Name',
    },
    dob: {
      headerLabel: 'Date of birth',
    },
    actions: {
      headerLabel: 'Actions',
      actions: [
        {
          label: 'Send',
          displayType: ActionDisplayType.STRING,
         // icon: 'fa fa-paper-plane'
        },
        {  
          label: 'Edit',
          displayType: ActionDisplayType.BUTTON
        },
        {
          label: 'Delete',
          displayType: ActionDisplayType.ICON,
          icon: 'fa fa-trash'
        }
      ]  
    }
  
  };

  tableSettings = ['name', 'lastname', 'dob', 'actions'];


  ngOnInit(){
    // here fetch data and put into local storage

  }
  onActionClicked(event: { action: string, item: any }) {
    console.log(`Action '${event.action}' was pressed for item:`, event.item);
    // Handle the action logic here in UsersComponent
  }

  onItemClicked(item: any) {
    console.log('Clicked item:', item);
  }

  
}