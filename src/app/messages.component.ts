import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

//panel modules are used for basic message template - displays both title and description
@Component({
  selector: 'app-root',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-app';
  
  //colleection containg tabs name
  alertTabs: MenuItem[] = [
    {label: 'Critical',},
    {label: 'Moderate'},
    {label: 'Low'}
  ];

  //array containing panel info: category, name, description, severity
  alertPanels: any[] = [
    { category: 'Equipment Failure', alertName: 'Hydraulic System Failure',description:'One of the drilling machines experienced a critical failure in the main hydraulic system, causing a temporary halt in operations.'
    , severity: 'Critical' },
    { category: 'Safety Concern', alertName: 'Gas Leak Detected',description:'A gas leak was detected in the vicinity of a drilling site. Emergency evacuation protocols have been initiated.'
    , severity: 'Critical' },
    { category: 'Weather Advisory', alertName: 'Severe Weather Warning',description:'Severe thunderstorms are forecasted in the drilling area, posing a risk of lightning strikes and high winds.'
    , severity: 'Moderate' },
    { category: 'Environmental Compliance', alertName: 'Drilling Fluid Spill',description:'An accidental spill of drilling fluid occurred, prompting immediate containment and cleanup efforts to mitigate environmental impact.'
    , severity: 'Low' },
    { category: 'Personnel Safety', alertName: 'Workplace Injury Reported',description:'An employee sustained minor injuries while operating heavy machinery. Medical assistance has been provided, and safety protocols are under review.'
    , severity: 'Moderate' },
    { category: 'Equipment Maintenance', alertName: 'Drill Bit Wear Detected',description:'Routine maintenance checks revealed abnormal wear in the drill bit, necessitating immediate replacement to prevent potential equipment failure during operations.'
    , severity: 'Low' }
  ];
  
  activeTab: MenuItem = this.alertTabs[0];

  

  

  
  ngOnInit(): void {
  
}
}