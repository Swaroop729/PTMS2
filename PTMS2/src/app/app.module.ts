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



// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { SimpleNotificationsModule } from 'angular2-notifications';
// import { PushNotificationComponent } from 'ng2-notifications/ng2-notifications';
import { VerticalTimelineModule} from 'angular-vertical-timeline';
import {DndModule} from 'ng2-dnd';
// import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';
import {InputEditorModule} from 'angular-inline-editors';
import { SelectEditorModule } from 'angular-inline-editors';
// The below is the new version angular 6 of fusion charts module
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d'; // Column2D chart
import stackedcolumn2d from 'fusioncharts/viz/stackedcolumn2d'; // stackedcolumn2d
import pie3d from 'fusioncharts/viz/pie3d'; // pie3d
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// import { FusionChartsModule } from 'angular4-fusioncharts';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';

import { fakeBackendProvider } from '../../helpers/fake-backend';
import { AuthGuard } from '../../guards/auth.gaurd';
import {  ErrorInterceptor } from '../../helpers/error.interceptor';
import { JwtInterceptor } from '../../helpers/jwt.interceptor';
import { AlertService, AuthenticationService, UserService } from '../../Service/';

import { AppComponent } from './app.component';
// The additonal components are added here
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
import { AddIncidentComponent } from '../../Components/add-incident/add-incident.component';
import { AddLeaveComponent } from '../../Components/add-leave/add-leave.component';
import {LoginComponent} from '../../Components/login/login.component';
import {AlertComponent} from '../../Components/alert/alert.component';
import {RegisterComponent} from '../../Components/register/register.component';
import {IncidentNotificationComponent} from '../../Components/incident-notification/incident-notification.component';
import { CommonModule } from '@angular/common';


FusionChartsModule.fcRoot(FusionCharts, stackedcolumn2d, pie3d, Column2D, FintTheme, Charts, FusionTheme);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    IncidentComponent,
    HomePageComponent,
    // PushNotificationComponent,
    DashboardComponent,
    TasksManagementComponent,
    NavbarComponent,
    IncidentsComponent,
    IncidentDetailsComponent,
    IncidentNotificationComponent,
    TaskDetailComponent,
    WorkGraphComponent,
    AddIncidentComponent,
    AddLeaveComponent

  ],
  imports: [
  //  BrowserModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FusionChartsModule,
    // FusionChartsModule.forRoot(FusionCharts,Column2D),
    DndModule.forRoot(),
    VerticalTimelineModule,
    // SimpleNotificationsModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    InputEditorModule.forRoot(),
    SelectEditorModule.forRoot(),
    RouterModule.forRoot([
      {      path: 'Home' , component: HomePageComponent, canActivate: [AuthGuard]   },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {      path: 'Incident' , component: IncidentComponent,    },
      {      path: 'Incidents' , component: IncidentsComponent,    },
      {      path: 'IncidentsNotification' , component: IncidentNotificationComponent,    },
      {      path: 'AddIncident' , component: AddIncidentComponent,    },
      {      path: 'AddLeave' , component: AddLeaveComponent,    },
      {      path: 'TaskManagement' , component: TasksManagementComponent,    },
      {      path: 'WorkGraph' , component: WorkGraphComponent,    },
      {      path: 'IncidentDetail/:IncidentId' , component: IncidentDetailsComponent,    },
      {      path: '**' , component: HomePageComponent,    },

    ])

  ],
  providers: [
    WebAPIService,
    // PushNotificationComponent,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
