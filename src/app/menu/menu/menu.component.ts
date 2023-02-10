import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user-interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  oUserSession: IUser;


  constructor() { 
    this.oUserSession = JSON.parse(localStorage.getItem("user"));
    console.log(this.oUserSession);
    
  }

  ngOnInit(): void {
  }

}
