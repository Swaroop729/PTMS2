import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WebAPIService } from '../../Service/WebAPI.service';
import { Leave } from '../../Models/Leave';


@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.scss']
})
export class AddLeaveComponent implements OnInit {
  StartDate= new Date();
  EndDate= new Date();
  leave = new Leave();
  StartDateChange(d:Date){
    d.setMinutes( d.getMinutes() + 530);
    this.StartDate = d;
    console.log(d);
  }
  EndDateChange(d:Date){
    d.setMinutes( d.getMinutes() + 530   );
    this.EndDate = d;    
    console.log(d);
  }

  LeaveStartFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }

  LeaveEndFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }

  addLeaveform = new FormGroup({
    StartDate : new FormControl(),
    EndDate : new FormControl(),
    // FullDay : new FormControl(),
    LeaveReason : new FormControl(),
  });


  constructor(private Service : WebAPIService) {  
  }

  AddLeave(){
    console.log(JSON.stringify(this.addLeaveform.value,null,2));

    this.leave.StartDate = this.StartDate
    this.leave.EndDate = this.EndDate;
    this.leave.LeaveReason = this.addLeaveform.controls['LeaveReason'].value;
    this.leave.UserId = 7 ;
    this.Service.AddLeave(this.leave)
    .subscribe((response)=>{console.log(response)}) 
  }
  ngOnInit() {
  }

}
