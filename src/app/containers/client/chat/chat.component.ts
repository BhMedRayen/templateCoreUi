import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { MessageService } from 'src/app/services/message.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  messageContent: string = '';
  user: any;
  selectedUserId: number = 0;
  selectedUser: any = null;
  productOwner: any[] = [];
  filteredUsers: any[] = [];
  searchQuery: string = '';
  messageSubscription!: Subscription;
  private lastSentMessageId: number | null = null;

  constructor(
    private messageService: MessageService,
    private userService: UsersService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const userData = localStorage.getItem('Client');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log("User auth:", this.user);
    } else {
      console.error('User data not found in local storage.');
    }
    console.log('Component initialized.');
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

  getProductOwner(): void {
    this.userService.getProductOwner().subscribe({
      next: (response: any) => {
        this.productOwner = response.product_owner;
        if (this.productOwner && Array.isArray(this.productOwner)) {
          this.filteredUsers = [...this.productOwner];
          console.log("Product owner:", this.productOwner);
        } else {
          console.error("Product owner data is missing or not an array.");
        }
      },
      error: (error: any) => {
        console.error("Error fetching product owner:", error);
      }
    });
  }

  filterUsers(): void {
    if (this.productOwner && Array.isArray(this.productOwner)) {
      this.filteredUsers = [...this.productOwner];
      if (this.searchQuery) {
        this.filteredUsers = this.filteredUsers.filter(user => 
          (user.name + ' ' + user.lastName).toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    }
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
        console.log("Messages:", this.messages);
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
