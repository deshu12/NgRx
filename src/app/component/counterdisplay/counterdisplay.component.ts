import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterModel } from 'src/app/shared/store/counter.model';
import { getCounter } from 'src/app/shared/store/counter.selector';


@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit {
  
  constructor(private store:Store<{counter:counterModel}>) { }
  counterDisplay!:any
  channalName!:any;
  subscriptionValue!:Subscription;
  counter$!:Observable<counterModel>;//without subscribe using observable to display our data
  //doller $ used with variable called obervable
  channal$!:Observable<counterModel>
  ngOnInit(): void {
    this.subscriptionValue = this.store.select(getCounter).subscribe((data)=> {
    // this.counterDisplay = data.counter//counter isliye remove lia because we get only one value in data now
    this.counterDisplay = data;
    console.log('counter value')
    // this.channalName = data.channalName;
    })
    
    // this.counter$=this.store.select('counter')//using observable not subscribe for fetch data
    // this.channal$=this.store.select('counter')
  }
  // ngOnDestroy(): void {
  //   if(this.subscriptionValue){
  //     this.subscriptionValue.unsubscribe();
  //   }


}
