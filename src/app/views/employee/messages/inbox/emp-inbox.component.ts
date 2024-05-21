import { Component, OnInit,OnDestroy,ChangeDetectorRef } from '@angular/core';
import { MessageService } from '../../../../services/message.service';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-emp-inbox',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './emp-inbox.component.html',
  styleUrl: './emp-inbox.component.scss'
})

export class EmpInboxComponent implements OnInit {
      messages: any[] = [];
      messageContent: string = '';
      user: any;
      selectedUserId: number = 0; 
      employees: any[] = [];
      messageSubscription!: Subscription;
      private lastSentMessageId: number | null = null;
      

    
      constructor(
        private messageService: MessageService,
        private empService: EmployeeServiceService,
        private cdr: ChangeDetectorRef
      ) {}
    
      ngOnInit(): void {
        const userData = localStorage.getItem('employee');
        if (userData) {
          this.user = JSON.parse(userData);
          console.log("user auth " , this.user);
          
        } else {
          console.error('User data not found in local storage.');
        }
        console.log('Component initialized.');
        this.getEmployees();
        this.messageSubscription = this.messageService.getMessageObservable().subscribe((message: any) => {
          console.log('New message received:', message);
          if (message.message.id !== this.lastSentMessageId) {
            this.messages.push(message.message); 
            this.cdr.detectChanges();
          }
        });

      }

      ngOnDestroy(): void {
        if (this.messageSubscription) {
          this.messageSubscription.unsubscribe();
        }
      }
      
    
      getEmployees(): void {
        this.empService.getConfirmedEmp().subscribe({
          next: (response: any) => {
            this.employees = response.users;
          },
          error: (error: any) => {
            console.log('Error fetching users ', error);
          }
        });
      }
    
      selectUser(userId: number): void {
        console.log('Selected user ID:', userId);
        this.selectedUserId = userId;
        console.log('Selected user ID stored:', this.selectedUserId);
        this.messages = [];
        this.retrieveMessages();
      }

      sendMessage(): void {
        if (this.selectedUserId === 0 || this.messageContent.trim() === '') {
          console.log('Please select a user and enter a message.');
          return;
        }
    
        this.messageService.sendMessage(this.user.id, this.selectedUserId, this.messageContent).subscribe({
          next: (response: any) => {
            console.log('Message sent successfully:', response);
            this.lastSentMessageId = response.id; // Track the last sent message ID
            // this.messages.push(response);
            this.messageContent = '';
            this.cdr.detectChanges(); // Explicitly trigger change detection
          },
          error: (error: any) => {
            console.error('Error sending message:', error);
          }
        });
      }
      retrieveMessages(): void {
        if (this.selectedUserId === 0) {
          console.log('Please select a user.');
          return;
        }
    
        this.messageService.getMessages(this.user.id, this.selectedUserId).subscribe({
          next: (response: any) => {
            console.log('Messages retrieved successfully:', response);
            this.messages = response;
            console.log("messages:", this.messages);
            this.messages.forEach(message => {
              console.log('Message content:', message.content);
              console.log('Message created_at:', message.created_at);
            });
            this.cdr.detectChanges(); // Explicitly trigger change detection
          },
          error: (error: any) => {
            console.error('Error retrieving messages:', error);
          }
        });
      }
   
      
      
    
}
