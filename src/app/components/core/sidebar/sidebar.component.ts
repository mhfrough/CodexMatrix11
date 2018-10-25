import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/core/navigation/navigation.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private nav: NavigationService, private app: AppComponent) { }

  ngOnInit() {
  }

}
