// // import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// // These are added modules
// import { FlexLayoutModule } from "@angular/flex-layout";
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterModule} from '@angular/router';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';



// import { AppComponent } from './app.component';
// //The additonal components are added here
// import { NavbarComponent } from '../../Components/navbar/navbar.component';
// import { HomePageComponent } from '../../Components/home-page/home-page.component';



// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     HomePageComponent
//   ],
//   imports: [
//     BrowserModule,
//     FlexLayoutModule,
//     MatSidenavModule,
//     MDBBootstrapModule.forRoot(),
//     MatToolbarModule,
//     BrowserAnimationsModule,
//     RouterModule.forRoot([
//       {      path:'Home' , component:HomePageComponent,    },
//       // {      path:'Incident' , component:IncidentComponent,    },
//       // {      path:'Incidents' , component:IncidentsComponent,    },
//       // {      path:'AddIncident' , component:AddIncidentComponent,    },
//       // {      path:'AddLeave' , component:AddLeaveComponent,    },
//       // {      path:'TaskManagement' , component:TasksManagementComponent,    },
//       // {      path:'WorkGraph' , component:WorkGraphComponent,    },
//       // {      path:'IncidentDetail/:Id' , component:IncidentDetailsComponent,    },
//       // {      path:'**' , component:HomePageComponent,    },
    
//     ])
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule , MatNativeDateModule } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { SimpleNotificationsModule } from 'angular2-notifications';
// import { PushNotificationComponent } from 'ng2-notifications/ng2-notifications';
import { VerticalTimelineModule} from 'angular-vertical-timeline'
import {DndModule} from 'ng2-dnd';
// import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';
import {InputEditorModule} from 'angular-inline-editors';
import { SelectEditorModule } from 'angular-inline-editors';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
//The additonal components are added here
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { HomePageComponent } from '../../Components/home-page/home-page.component';
import { IncidentComponent } from '../../Components/incident/incident.component';
import { WebAPIService } from '../../Service/WebAPI.service';
import { DashboardComponent } from '../../Components/dashboard/dashboard.component';
import { TasksManagementComponent } from '../../Components/tasks-management/tasks-management.component';
import { IncidentsComponent } from '../../Components/incidents/incidents.component';
import { IncidentDetailsComponent } from '../../Components/incident-details/incident-details.component';
import { TaskDetailComponent } from '../../Components/task-detail/task-detail.component';
import { WorkGraphComponent } from '../../Components/work-graph/work-graph.component';
import { AddIncidentComponent } from '../../Components/add-incident/add-incident.component'
import { AddLeaveComponent } from '../../Components/add-leave/add-leave.component';


@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent,
    HomePageComponent,
    // PushNotificationComponent,
    DashboardComponent,
    TasksManagementComponent,
    NavbarComponent,
    IncidentsComponent,
    IncidentDetailsComponent,
    TaskDetailComponent,
    WorkGraphComponent,
    AddIncidentComponent,
    AddLeaveComponent
    
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FusionChartsModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme),
    DndModule.forRoot(),
    VerticalTimelineModule,
    // SimpleNotificationsModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    InputEditorModule.forRoot(),
    SelectEditorModule.forRoot(),
    RouterModule.forRoot([
      {      path:'Home' , component:HomePageComponent,    },
      {      path:'Incident' , component:IncidentComponent,    },
      // {      path:'Incidents' , component:IncidentsComponent,    },
      {      path:'AddIncident' , component:AddIncidentComponent,    },
      {      path:'AddLeave' , component:AddLeaveComponent,    },
      {      path:'TaskManagement' , component:TasksManagementComponent,    },
      {      path:'WorkGraph' , component:WorkGraphComponent,    },
      {      path:'IncidentDetail/:Id' , component:IncidentDetailsComponent,    },
      {      path:'**' , component:HomePageComponent,    },
    
    ])

  ],
  providers: [
    WebAPIService,
    // PushNotificationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
