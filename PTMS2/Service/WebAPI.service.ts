import { Injectable } from '@angular/core';
// import {  RequestOptions, RequestMethod,  } from '@angular/common/http';
import { ICountofTickets } from '../Interfaces/CountofTickets';
import { Incident } from '../Models/Incident';
import { Leave } from '../Models/Leave';
import { HttpClient, HttpHeaders  } from '@angular/common/http';




@Injectable()
export class WebAPIService {
  // url = 'https://my-json-server.typicode.com/Swaroop729/WebAPI'
  // url = 'https://my-json-server.typicode.com/Swaroop729/WebAPI/db'

  // Using the json-server
  // url='  http://localhost:3000/Incidents'
  // using github.json
//  url = 'https://my-json-server.typicode.com/Swaroop729/WebAPI/Incidents/'
 url = `http://localhost:56161/api/Incident`;
 url1 = `http://localhost:56161/api/Incident`;
 url2 = `http://localhost:56161/api/Incidents`;
 CQA;
 Scorecard;
 Gupta;
ListByGroupNames: Array<ICountofTickets> = [];
contentheaders = new HttpHeaders().set('content-type', 'application/json');



    constructor(private http: HttpClient, private _httpclient: HttpClient) {    }
    getIncidents() {
      // this.url=this.url2;
      return this.http.get(this.url2);
     }

     getIncidentDetails(id) {
      return this.http.get(this.url2 + '/' + 'GetIncidentDetails' + '/' + id + '/' + 1);
    }
    /* The below consists of request methods and options and headers which are not working as of now so
    commenting it as it is a post method we will work on it later */
    // putIncident(post){
    //   // return this.http.put(this.url + '?IncidentId=' + post.IncidentId,JSON.stringify(post))
    //   console.log(JSON.stringify(post,null,2))
    //   var headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   headers.append("Allow-Control-Allow-Origin","*");
    //    var options = new RequestOptions({
    //     method: RequestMethod.Put,
    //     headers:headers
    //   });
    //   return this.http.put(this.url+'/'+ post.Id,JSON.stringify(post),options)
    //  }

      putIncidentNotification(post) {
    //   // return this.http.put(this.url + '?IncidentId=' + post.IncidentId,JSON.stringify(post))
    //   console.log(JSON.stringify(post,null,2));
    //   this.url = this.url1;
    //   console.log("hitting this url",this.url);
    //   var headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   headers.append("Allow-Control-Allow-Origin","*");
    //    var options = new OptionsType({
    //     method: RequestMethod.Put,
    //     headers:headers
    //   });
    //   return this.http.put(this.url+'/'+'PutIncidentNotification'+'/'+ post.Id,JSON.stringify(post),options)
     }

     AddIncident(post) {
      const headers = new HttpHeaders().set('content-type', 'application/json');
      const incident = new Incident();
      incident.ApplicationName = post.ApplicationName;
      incident.Percentage = post.Percentage;
      incident.Comment = post.Comment;
      incident.CreatedDate = post.CreatedDate;
      incident.IncidentId = post.IncidentId;
      // incident.IncidentId = "INC0000000000001";
      // console.log("incident id",incident.IncidentId);
      incident.ModifiedDate = post.CreatedDate;
      incident.ResolutionDate = post.ResolutionDate;
      return this._httpclient.post<Incident>(this.url, incident, {
          headers
      });
     }

     AddLeave(post) {
      const contentheaders = new HttpHeaders().set('content-type', 'application/json');
       this.url = `${this.url1}/Leave`;
       console.log(this.url, JSON.stringify(post, null, 2) );
      return this._httpclient.post<Leave>(this.url, post);
     }

     CountByAppNames() {
      //// Fetching the username from the local storage
      console.log('coming into req funct');
      const userdetails = JSON.parse(localStorage.getItem('currentUser')) ;
      // var user = userdetails["username"];
      const userid = 1;
      const month = 4;
      const year = 2018;
      this.url = `${this.url}/GetInCompletedTasksForUser/${userid}/${month}/${year}`;
      console.log(this.url);

      // this.http.get(this.url)
      // .subscribe((response)=>{
      //     resp = JSON.parse(response.json());
      //     console.log(resp);
      //   });


      // this.http.get(this.url + '?ApplicationName=' + "CQA")
      // .subscribe((response)=>{
      //   this.CQA=response.json().length;
      //   this.ListByGroupNames.push({label:"CQA",value:this.CQA});
      // })
      // this.http.get(this.url + '?ApplicationName=' + "Scorecard")
      // .subscribe((response)=>{
      //   this.Scorecard=response.json().length;
      //   this.ListByGroupNames.push({label:"Scorecard",value:this.Scorecard})
      // })
      // this.http.get(this.url + '?ApplicationName=' + "Gupta")
      // .subscribe((response)=>{
      //   this.Gupta=response.json().length;
      //   this.ListByGroupNames.push({label:"Gupta",value:this.Gupta})
      // })
      // return resp;
      return this.http.get(this.url);
     }

     GetIncidentNotifications() {
      //// Fetching the username from the local storage
      const userdetails = JSON.parse(localStorage.getItem('currentUser')) ;
      // var user = userdetails["username"];
      const userid = 1;
      this.url = `${this.url}/GetIncidentNotifications/${userid}`;
      console.log('*', this.url);
      return this.http.get(this.url);
     }
  }
