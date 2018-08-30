import { Component, OnInit } from '@angular/core';
import { WebAPIService } from '../../Service/WebAPI.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  Incidents;
  tomorrow = new Date(2017, 9, 20, 14,34);
  options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
  }
  constructor( private Service :  WebAPIService) { 
  Service.getIncidents()
  .subscribe((Response)=>
  {
    this.Incidents=Response.json()
  })
}
  ngOnInit() {
  }
  UpdateIncident(post){
    this.Service.putIncident(post)
    .subscribe((response)=>{console.log(response)})
    
  }


}