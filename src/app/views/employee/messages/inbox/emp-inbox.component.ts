import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MessageService } from '../../../../services/message.service';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-emp-inbox',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './emp-inbox.component.html',
  styleUrls: ['./emp-inbox.component.scss']
})
export class EmpInboxComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  messageContent: string = '';
  user: any;
  selectedUserId: number = 0;
  selectedUser: any = null;
  employees: any[] = [];
  productOwner: any;
  filteredUsers: any[] = [];
  searchQuery: string = '';
  messageSubscription!: Subscription;
  private lastSentMessageId: number | null = null;
  selectedUserType: string = 'employees'; // Default to employees

  constructor(
    private messageService: MessageService,
    private empService: EmployeeServiceService,
    private userService: UsersService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('employee');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log("user auth ", this.user);
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
    this.getProductOwner();
  }

  ngOnDestroy(): void {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

  getEmployees(): void {
    this.empService.getConfirmedEmp().subscribe({
      next: (response: any) => {
        this.employees = response.users.filter((employee: any) => employee.id !== this.user.id);
        this.filteredUsers = [...this.employees];
      },
      error: (error: any) => {
        console.log('Error fetching employees ', error);
      }
    });
  }

  getProductOwner(): void {
    this.userService.getProductOwner().subscribe({
      next: (response: any) => {
        this.productOwner = response.product_owner;
        console.log("Product owner ", this.productOwner);
      },
      error: (error: any) => {
        console.log("Error fetching product owner ", error);
      }
    });
  }
  filterUsers(): void {
    if (this.selectedUserType === 'employees') {
      this.filteredUsers = this.employees.filter(user => (user.name + ' ' + user.lastName).toLowerCase().includes(this.searchQuery.toLowerCase()));
    } else if (this.selectedUserType === 'productOwner' && this.productOwner) {
      this.filteredUsers = this.productOwner;
    }
  }
  
  onChangeUserType(): void {
    this.filterUsers();
  }

  selectUser(userId: number): void {
    console.log('Selected user ID:', userId);
    this.selectedUserId = userId;
    this.selectedUser = this.filteredUsers.find(user => user.id === userId);
    console.log('Selected user:', this.selectedUser);
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
        this.lastSentMessageId = response.id;
        this.messageContent = '';
        this.scrollToBottom();
        this.cdr.detectChanges();
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
        this.scrollToBottom();
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error('Error retrieving messages:', error);
      }
    });
  }

  scrollToBottom(): void {
    const chatBody = document.querySelector('.chat-body');
    if (chatBody) {
      setTimeout(() => {
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 100);
    }
  }
}
