import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'NavigationBar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Logout() {
    console.log('coming into logout function and clearing values');
    localStorage.clear();
  }

}
