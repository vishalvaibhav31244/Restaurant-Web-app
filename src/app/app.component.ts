import {ExampleComponent} from './example/example.component';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week2';
  constructor(private dialog:MatDialog) 
  {
    
  }

menu=[
  {name:"Swaaddesh",place:"Patna",imageurl:"/assets/images/1.jpg"},
  {name:"17DEGREE",place:"Patna",imageurl:"/assets/images/2.jpg"},
  {name:"MAINLAND CHINA",place:"Patna",imageurl:"/assets/images/3.jpg"},
  {name:"The Yellow Chilli",place:"Patna",imageurl:"/assets/images/4.jpg"},
  {name:"KAPILDEV11",place:"Patna",imageurl:"/assets/images/5.jpg"},
  {name:"Cookbook Cafe",place:"Patna",imageurl:"/assets/images/6.jpg"},
]
showDialog(obj)
  {
    this.dialog.open(ExampleComponent,{data:{name:obj}});
  }
  
  
}
