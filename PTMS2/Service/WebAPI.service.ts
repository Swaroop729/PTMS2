import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestMethod,Headers, Jsonp  } from '@angular/http';
import { ICountofTickets } from '../Interfaces/CountofTickets';
import { Incident } from '../Models/Incident';
import { Leave } from '../Models/Leave';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable()
export class WebAPIService {
  // url = 'https://my-json-server.typicode.com/Swaroop729/WebAPI'
  // url = 'https://my-json-server.typicode.com/Swaroop729/WebAPI/db'

  // Using the json-server 
  // url='  http://localhost:3000/Incidents'
  // using github.json
//  url = 'https://my-json-server.typicode.com/Swaroop729/WebAPI/Incidents/'
 url = `http://localhost:5000/api/Incident`;
 url1 = `http://localhost:5000/api`
 CQA;
 Scorecard;
 Gupta;
ListByGroupNames: Array<ICountofTickets>= [];
contentheaders = new HttpHeaders().set('content-type', 'application/json');



    constructor(private http : Http, private _httpclient : HttpClient) {    }
    getIncidents(){
      return this.http.get(this.url);
     }

     getIncidentDetails(id:number): any {
       this.url = `${this.url}/${id}`
      console.log("id in webservice : " + this.url);
      return this.http.get(this.url);    
    }

    putIncident(post){
      // return this.http.put(this.url + '?IncidentId=' + post.IncidentId,JSON.stringify(post))
      console.log(JSON.stringify(post,null,2))
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append("Allow-Control-Allow-Origin","*");
       var options = new RequestOptions({
        method: RequestMethod.Put,
        headers:headers
      });
      return this.http.put(this.url+'/'+ post.Id,JSON.stringify(post),options)
     }

     AddIncident(post){
      const headers = new HttpHeaders().set('content-type', 'application/json');
      let incident = new Incident();
      incident.ApplicationName = post.ApplicationName;
      incident.Percentage = post.Percentage;
      incident.Comment = post.Comment;
      incident.CreatedDate = post.CreatedDate;
      incident.IncidentId = post.IncidentId;
      // incident.IncidentId = "INC0000000000001";
      // console.log("incident id",incident.IncidentId);
      incident.ModifiedDate = post.CreatedDate;
      incident.ResolutionDate= post.ResolutionDate;
      return this._httpclient.post<Incident>(this.url,incident, {
          headers
      })
     }

     AddLeave(post){
      const contentheaders = new HttpHeaders().set('content-type', 'application/json');
       this.url = `${this.url1}/Leave`;
       console.log(this.url,JSON.stringify(post,null,2) );
      return this._httpclient.post<Leave>(this.url,post);  
     }

     CountByAppNames(){
      this.http.get(this.url + '?ApplicationName=' + "CQA")
      .subscribe((response)=>{
        this.CQA=response.json().length;
        this.ListByGroupNames.push({label:"CQA",value:this.CQA});
      })
      this.http.get(this.url + '?ApplicationName=' + "Scorecard")
      .subscribe((response)=>{
        this.Scorecard=response.json().length;
        this.ListByGroupNames.push({label:"Scorecard",value:this.Scorecard})
      })
      this.http.get(this.url + '?ApplicationName=' + "Gupta")
      .subscribe((response)=>{
        this.Gupta=response.json().length;
        this.ListByGroupNames.push({label:"Gupta",value:this.Gupta})
      })
      return this.ListByGroupNames;
     }
  }   