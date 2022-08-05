import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') == "salman"){ // User authenticated
      this.route.navigate(['dashboard']);
     }else{ // Invalid User
      this.route.navigate(['login']);
     }
  }
  logout(){
    localStorage.removeItem('user');
    this.route.navigate(['login']);
  }

}
