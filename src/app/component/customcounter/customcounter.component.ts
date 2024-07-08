import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/store/counter.action';
import { counterModel } from 'src/app/shared/store/counter.model';
import { getChannalName } from 'src/app/shared/store/counter.selector';
import { AppstateModel } from 'src/app/shared/store/Globel/app.state.model';


@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent implements OnInit{
  counterDisplay!: number;
  channalName: any;
  subscriptionValue: any;
  constructor(private store: Store<AppstateModel>) { }
  counterInput!: number;
  actionType='add';
  onIncrement() {
    this.store.dispatch(customIncrement({value: +this.counterInput,action:this.actionType  }));
  }
  ngOnInit(): void {
      this.subscriptionValue = this.store.select(getChannalName).subscribe((data)=> {
        console.log('data ngOnInit()',data);
    this.channalName = data;
    console.log(data)
    })
  }

}
