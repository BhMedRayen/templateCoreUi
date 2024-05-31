import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientContractsComponent } from './client-contracts/client-contracts.component';
import { ClientWelcomeComponent } from './client-layout/client-welcome.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    ClientLayoutComponent,
    ClientContractsComponent,
    ClientWelcomeComponent,
    ChatComponent
    
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterModule,
    
  ],
})
export class ClientModule { }
