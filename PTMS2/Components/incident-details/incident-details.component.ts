import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebAPIService } from '../../Service/WebAPI.service';
import { Incident } from '../../Models/Incident';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.scss']
})
export class IncidentDetailsComponent implements OnInit {

  Incident : Incident =  <Incident>{};
  constructor(private route : ActivatedRoute,private service : WebAPIService) { }

  ngOnInit() {

    let id =+ this.route.snapshot.paramMap.get('Id');
    this.service.getIncidentDetails(id)
    .subscribe((Response)=>
    {
      this.Incident=Response.json()
      console.log("Incident",this.Incident);
    })
  }
 
  // anotherfunc(id){
  //   console.log("Logging into another function");
  //   this.service.getIncidentDetails(id)
  //   .subscribe((Response)=>
  //   {
  //     this.Incident=Response.json()
  //     console.log("Incident",this.Incident);
  //   })
  // }
}
