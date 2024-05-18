import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormModule } from '@coreui/angular';

@Component({
  selector: 'app-employee-inbox',
  standalone: true,
  imports: [
    CommonModule,
    FormModule
  ],
  templateUrl: './emp-inbox.component.html',
  styleUrl: './emp-inbox.component.scss'
})
export class EmpInboxComponent implements OnInit{



  constructor( ) {}

    ngOnInit(): void {

    }


  }





