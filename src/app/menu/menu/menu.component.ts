import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user-interface';
import { Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  strUsertype: string = '';

  oUserSession: IUser;
  isLogged: boolean = false;
  admin: any;
  loggedUser: any;

  constructor(private oSessionService: SessionService) {}

  ngOnInit() {
    this.oSessionService.checkSession().subscribe(
      (data: IUser) => {
        this.isLogged = true;
        this.strUsertype = data.usertype.name;
      }
    );
    this.oSessionService.on(Events.login).subscribe(
      (data: string) => {
        return this.oSessionService.checkSession().subscribe(
          (data: IUser) => {
            this.isLogged = true;
            this.strUsertype = data.usertype.name;
          }
        );
      });
    this.oSessionService.on(Events.logout).subscribe(
      (data: string) => {
        this.isLogged = false;
        this.strUsertype = '';
      });

  }

}
