import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { blogModel } from 'src/app/shared/store/blog/blog.model';
import { getBlog } from 'src/app/shared/store/blog/blog.selector';
import { AppstateModel } from 'src/app/shared/store/Globel/app.state.model';
import { AddblogComponent } from '../addblog/addblog.component';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private store:Store<AppstateModel>,private dialog:MatDialog) { }
blogValueList!:blogModel[];
  ngOnInit(): void {
       this.store.select(getBlog).subscribe((item)=> {
    this.blogValueList = item;
    })
  }
  onAddBlog(){
    this.openPopup()
  }
  openPopup(){
    this.dialog.open(AddblogComponent,{
      width:'50%'
      
    });
    
  }
  }


