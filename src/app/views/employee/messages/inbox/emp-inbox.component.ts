import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormModule } from '@coreui/angular';
import {MessageService } from '../../../../services/message.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-inbox',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './emp-inbox.component.html',
  styleUrl: './emp-inbox.component.scss'
})
export class EmpInboxComponent implements OnInit{

  messages: any[] = [];
  messageContent: string = '';
  user: any;


  constructor(private messageService: MessageService) {}

    ngOnInit(): void {
      const userString = localStorage.getItem('employee');
      if (userString) {
        this.user = JSON.parse(userString);
        console.log('User retrieved from local storage:', this.user);
      } else {
        console.error('User not found in local storage');
        return; 
      }
        

      this.messageService.getMessages().subscribe((messages: any) => {
        this.messages = messages;
      });
  
      this.messageService.listenToMessages((message: any) => {
        this.messages.push(message);
      });
    }

    sendMessage(): void {
    
      if (!this.user) {
        console.error('User not found');
        return;
      }
    
      const message = {
        sender_id: this.user.id,
        receiver_id: 17, // Set the receiver id appropriately
        content: this.messageContent
      };
    
      this.messageService.sendMessage(message).subscribe(() => {
        this.messageContent = '';
      });
    }



  }





