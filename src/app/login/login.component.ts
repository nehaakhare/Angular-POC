import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  username!: string;
  password!: string;
  ngOnInit(): void {
  }
  login() : void { 

    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["nav"]);
    }else {
      alert("Invalid credentials");
    }

  }
  }

