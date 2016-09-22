import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: '/app/news/news.component.html'
})
export class NewsComponent implements OnInit {

  public constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('News | Future150');
  }
}
