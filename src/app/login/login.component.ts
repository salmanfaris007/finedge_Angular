import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  constructor(private route: Router) { }

  ngOnInit(): void {
  
  }

  login(){
    if(this.userName && this.password){ //Valid user
      localStorage.setItem('user', JSON.stringify({userName: this.userName, role: this.password}))
      this.route.navigate(['dashboard'])
    }else{
      alert('Enter user credintial');
    }
  }
}
