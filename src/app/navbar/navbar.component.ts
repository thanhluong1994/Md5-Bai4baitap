import { Component, OnInit } from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [
    {
      name: 'The Evolution',
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      name: 'Game',
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      name: 'REST API',
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      name: 'Test',
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      name: 'Web Server',
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    },
    {
      name: 'Music',
      title: 'Music',
      url: 'https://www.youtube.com/watch?v=BDocp-VpCwY&list=RDTc0tLGWIqxA&index=24'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
