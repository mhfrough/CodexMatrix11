import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/core/navigation/navigation.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private nav: NavigationService, private _auth: AuthService,
    private app: AppComponent) { }

  ngOnInit() {
  }

  logOut() {
    this._auth.logOut();
  }

  onClosed(dismissedAlert: any): void {
    this.app.alerts = this.app.alerts.filter(alert => alert !== dismissedAlert);
  }

}
