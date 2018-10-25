import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/core/navigation/navigation.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private nav: NavigationService, private app: AppComponent) { }

  ngOnInit() {
    this.app.alerts = [];
    this.nav.show();
  }

}
