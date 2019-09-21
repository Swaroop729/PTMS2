import { Component, OnInit } from '@angular/core';
import { WebAPIService } from '../../Service/WebAPI.service';


@Component({
  selector: 'app-incident-notification',
  templateUrl: './incident-notification.component.html',
  styleUrls: ['./incident-notification.component.scss']
})
export class IncidentNotificationComponent implements OnInit {
  IncidentsNotifications;

  constructor(private Service: WebAPIService) {
    Service.GetIncidentNotifications().subscribe(
      (Response)=>
    {
      this.IncidentsNotifications=JSON.parse(Response.toString());
      console.log("obj receiving in incident notf",this.IncidentsNotifications)
    })
   }

  ngOnInit() {
  }

  UpdateIncident(post){
    //get the current user and replace it with 1;
    post.id = 1;
    //this.Service.putIncidentNotification(post)
    //.subscribe((response)=>{console.log(response)})
    
  }

}
