import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements OnInit {
  list=["Chiken Briyani","Veg Briyani","Veg Straters","Softdrinks"]
  constructor(@Inject( MAT_DIALOG_DATA ) public data:any) { }
  ngOnInit(): void {
  }
  
}
