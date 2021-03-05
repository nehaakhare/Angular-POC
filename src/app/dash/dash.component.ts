import { Component } from '@angular/core';
export interface PeriodicElement {
  position: number;
  name: string; 
  weight: number;
  symbol: string;
 
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '01-Feb-2018', weight: 700, symbol: 'Room Rent'},
  {position: 2, name: '02-Feb-2019', weight: 20, symbol: 'Morrison'},
  

];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  // displayedColumns: string[] = [ 'Description', 'Amount'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
   dataSource = ELEMENT_DATA;
  

}
