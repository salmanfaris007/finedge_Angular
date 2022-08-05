import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: any;
  constructor(private route: Router) { }

  ngOnInit(): void {
  
  }

  login(){
    if(this.userName == 'salman'){ //Valid user
      localStorage.setItem('user', this.userName)
      this.route.navigate(['dashboard'])
    }else{
      alert('Enter valid user credintial');
    }
  }
}
