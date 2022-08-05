import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: '#fec600', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80'},
    {text: 'Two', cols: 1, rows: 2, color: '#ddebeb', src:'https://c1.wallpaperflare.com/preview/801/440/950/ipad-tablet-watch-smart-watch.jpg'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', src:'https://c1.wallpaperflare.com/preview/346/197/186/apple-imac-computers-imac-apple.jpg'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', src:'https://www.playblog.it/wp-content/uploads/2021/10/Samsung-Galaxy-S22-Ultra-potrebbe-avere-il-miglior-display-di-sempre.jpg'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
