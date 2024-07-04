import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getData:any;
  
  constructor( private _data:MyServiceService) {}

  ngOnInit(): void {
  this._data.onApiSend().subscribe((data)=>{
    this.getData=data
  }) 
  }


}
