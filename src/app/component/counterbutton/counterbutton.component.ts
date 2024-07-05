import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannalName, decrement, increment, reset } from 'src/app/shared/store/counter.action';
import { counterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent implements OnInit {
  changechannal!:string;

  constructor(private store:Store<{counter:counterModel}>) { }

  ngOnInit(): void {
    
  }
  onIncrement(){
  this.store.dispatch(increment())
  }
  onDecrement(){
  this.store.dispatch(decrement())
  }
  onReset(){
  this.store.dispatch(reset())
  }
  onRename(){
    this.store.dispatch(changeChannalName({channal:'welcome to StarPLus'}))
    
  }


}
