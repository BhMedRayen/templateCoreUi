import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
  selector: 'app-employee-footer',
  templateUrl: './employee-footer.component.html',
  styleUrls: ['./employee-footer.component.scss'],
})
export class EmployeeFooterComponent extends FooterComponent {
  constructor() {
    super();
  }
}
