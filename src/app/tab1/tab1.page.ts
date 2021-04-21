import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/assets/blogs/blog.interface';
import blogs from 'src/assets/blogs/blogs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  blogCollection: {blogs: Blogs[]}[];
  ngOnInit () {
    this.blogCollection = blogs;
  }
  constructor() {}

}
