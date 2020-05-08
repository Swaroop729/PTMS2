import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { stringify } from "querystring";

@Component({
  selector: "NavigationBar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(private Router: Router) {}

  ngOnInit() {}

  Logout() {
    console.log("coming into logout function and clearing values");
    localStorage.clear();
  }

  submitMethod(event) {
    if (String(event.target.value).trim().length != 0) {
      this.Router.navigate(["/IncidentDetail", event.target.value]);
    }
  }
}
