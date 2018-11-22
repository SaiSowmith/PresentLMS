import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {NavItem} from '../menu-list-item/nav-item';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})

export class SidenavComponent implements OnInit {
  navItems: NavItem[] = [
    {
      displayName: 'DashBoard',
      iconName: 'calendar_view_day',
      route: 'dashboard'


    },
    {
      displayName: 'LeaveManagement',
      iconName: 'calendar_view_day',
      children: [
        {
          displayName: 'ApplyLeave',
          iconName: 'group',
          route: 'second'
        },
        {
          displayName: 'Approval Leaves List',
          iconName: 'speaker_notes',
          route: 'employeeleaves'

      
        }
      ]
    },
    {
      displayName:'Reports',
      iconName:'group',
      route:'reports'
    },
    {
      displayName: 'Logout',
      iconName: 'calendar_view_day',
      route: 'logout'


    },
    // {
    //   displayName: 'Exapnsis',
    //   iconName: 'videocam',
    //   children: [
    //     {
    //       displayName: 'Apply Exapnsis',
    //       iconName: 'group'
         
    //     },
    //     {
    //       displayName: 'Expansis List',
    //       iconName: 'speaker_notes'
      
    //     }
        
    //   ]
    // }
    
    
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  EmpId: any;
  EmpName: any;
  EMail: any;
  EmpDOJ: any;

  constructor(private breakpointObserver: BreakpointObserver) { }


  ngOnInit() {
    this.EmpId = localStorage.getItem("EmpId");
    this.EmpName = localStorage.getItem("EmpName");
    this.EMail = localStorage.getItem("EMail");
    this.EmpDOJ = localStorage.getItem("EmpDOJ");
  }
}
