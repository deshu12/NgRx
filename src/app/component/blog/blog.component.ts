import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { blogModel } from 'src/app/shared/store/blog/blog.model';
import { getBlog } from 'src/app/shared/store/blog/blog.selector';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private store:Store<{blog:blogModel}>) { }
blogValueList!:blogModel[];
  ngOnInit(): void {
       this.store.select(getBlog).subscribe((item)=> {
    this.blogValueList = item;
    console.log(this.blogValueList)
    })
  }
  }


