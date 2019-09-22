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

  Incidents;
  Incident;
  constructor(private route: ActivatedRoute, private service: WebAPIService) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('IncidentId');
    console.log('id sending to service', id);
    this.service.getIncidentDetails(id)
    .subscribe((Response) => {
      this.Incidents = JSON.parse(Response.toString());
      console.log('Incident', this.Incidents);
    });
  }
}
