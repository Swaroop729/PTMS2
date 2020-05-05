import { Component, OnInit } from "@angular/core";
import { WebAPIService } from "../../Service/WebAPI.service";
import { IIncidents } from "../../Interfaces/Incidents";

@Component({
  selector: "tasks-management",
  templateUrl: "./tasks-management.component.html",
  styleUrls: ["./tasks-management.component.scss"],
})
export class TasksManagementComponent implements OnInit {
  Incidents;
  InProgress: Array<any> = [];
  Complete: Array<any> = [];
  constructor(Service: WebAPIService) {
    Service.getIncidents().subscribe((Response) => {
      this.Incidents = Response;
      console.log(typeof Response);
      // this.Complete=Response.toString()
    });
  }

  ngOnInit() {}
}
