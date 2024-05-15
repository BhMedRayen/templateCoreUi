import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
  selector: 'app-client-footer',
  templateUrl: './client-footer.component.html',
  styleUrls: ['./client-footer.component.scss'],
})
export class ClientFooterComponent extends FooterComponent {
  constructor() {
    super();
  }
}
