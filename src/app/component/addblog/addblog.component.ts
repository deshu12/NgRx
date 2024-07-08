import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  constructor(private dialogref:MatDialogRef<AddblogComponent>) { }

  ngOnInit(): void {
  }
  onclosepopup(){
  this.dialogref.close()
  }

}
