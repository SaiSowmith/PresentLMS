import { Component, OnInit } from '@angular/core';
import {NavItem} from '../menu-list-item/nav-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navItems: NavItem[] = [
    {
      displayName: 'LeaveManagement',
      iconName: 'recent_actors',
      children: [
        {
          displayName: 'ApplyLeave',
          iconName: 'group',
          route: 'second'
        },
        {
          displayName: 'Approval Leaves List',
          iconName: 'speaker_notes'
      
        }
      ]
    },
    {
      displayName: 'Exapnsis',
      iconName: 'videocam',
      children: [
        {
          displayName: 'Apply Exapnsis',
          iconName: 'group'
         
        },
        {
          displayName: 'Expansis List',
          iconName: 'speaker_notes'
      
        }
        
      ]
    }
    
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
