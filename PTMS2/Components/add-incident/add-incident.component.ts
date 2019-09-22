import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WebAPIService } from '../../Service/WebAPI.service';
import {Incident} from '../../Models/Incident';


@Component({
  selector: 'app-add-incident',
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.scss']
})
export class AddIncidentComponent implements OnInit {

  public TodayDate: Date = new Date();
  public incident: Incident = new Incident();

  constructor(private Service:  WebAPIService) {
    console.log(this.TodayDate);
   }
  addIncidentform = new FormGroup({
    // Id : new FormControl(),
    IncidentId : new FormControl(),
    Percentage : new FormControl(),
    ApplicationName : new FormControl(),
    Comment : new FormControl(),
    // WorkTime : new FormControl(),
  });


  ngOnInit() {
  }

  AddIncident() {
    // this.addIncidentform.setValue({CreatedDate: this.TodayDate , ResolutionDate : this.TodayDate , ModifiedDate : this.TodayDate});
    this.incident.ApplicationName = this.addIncidentform.controls['ApplicationName'].value;
    this.incident.IncidentId = this.addIncidentform.controls['IncidentId'].value;
    this.incident.Percentage = this.addIncidentform.controls['Percentage'].value;
    this.incident.Comment = this.addIncidentform.controls['Comment'].value;
    // this.incident.WorkTime = this.addIncidentform.controls['WorkTime'].value;
    this.incident.ResolutionDate = this.TodayDate;
    this.incident.CreatedDate = this.TodayDate;
    this.incident.ModifiedDate = null;

    // Subscribing the observable to add the Incident
    this.Service.AddIncident(this.incident)
    .subscribe((response) => {console.log(response); });
  }



}
