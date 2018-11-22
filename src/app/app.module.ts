import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LeaveComponent } from './components/leave/leave.component';
import { ApplyLeave } from './components/leave/leave.component';
import { RejectLeave } from './components/employees-applied-leaves/employees-applied-leaves.component'
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/reports/reports.component';


import { SidenavComponent } from './components/sidenav/sidenav.component'

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule,MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatNativeDateModule,MatMenuModule, MatCardModule, MatSidenav, MatInputModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';

import { ReactiveFormsModule } from '@angular/forms';
import { 
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatGridListModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatStepperModule,
  
} from '@angular/material';
import { EmployeesAppliedLeavesComponent } from './components/employees-applied-leaves/employees-applied-leaves.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { InitialLoginComponent, DialogOverviewExampleDialog3 } from './components/initial-login/initial-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'initial-login', component: InitialLoginComponent },


  { path: '', redirectTo: 'login', data: { title: 'Login Component' }, pathMatch: 'full' },
  {
    path: 'login', component: LoginLayoutComponent, data: {title: 'Login Layout Component'},
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  { path: 'main', component: HomeLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {path: 'leaves', component: LeaveComponent },
      {path: 'employeeleaves', component: EmployeesAppliedLeavesComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'dashboard', component: HomeComponent },


    ]
    
    
  }
  


];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeaveComponent,
    HomeComponent,
    ApplyLeave,
    RejectLeave,
    SidenavComponent,
    EmployeesAppliedLeavesComponent,
    NavigationComponent,
    MenuListItemComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    ReportsComponent ,
    InitialLoginComponent,
    DialogOverviewExampleDialog3
    
  ],
  imports: [BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,

    ReactiveFormsModule,
    MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatGridListModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatStepperModule 
    ],
  providers: [LoginComponent,  MatDatepickerModule],
  entryComponents: [
    ApplyLeave,
    RejectLeave,
    DialogOverviewExampleDialog3
    ],
    exports:[ApplyLeave,RejectLeave,DialogOverviewExampleDialog3],
  bootstrap: [AppComponent]
})
export class AppModule { }
