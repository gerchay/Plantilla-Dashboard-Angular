import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  opened:boolean = false;
  menu:any[] = [
    { titulo: 'Home', icono: 'dashboard', link: 'home'},
    { titulo: 'Listado', icono: 'backup_table', link: 'about'},
    { titulo: 'Login', icono: 'login', link: 'login'},
    { titulo: 'Registrar', icono: 'app_registration', link: 'register'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
