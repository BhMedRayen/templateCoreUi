import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent  implements OnInit{

  client: any;
  messageSubscription!: Subscription;
  private lastSentMessageId: number | null = null;
  messages: any[] = [];
  productOwner: any;

  constructor(
    private userService: UsersService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('Client');
    if (userData) {
      this.client = JSON.parse(userData);
      console.log("Client:", this.client);
    } else {
      console.error('User data not found in local storage.');
    }
    this.messageSubscription = this.messageService.getMessageObservable().subscribe((message: any) => {
      console.log('New message received:', message);
      if (message.message.id !== this.lastSentMessageId) {
        this.messages.push(message.message);
        this.cdr.detectChanges();
      }
    });
    this.getProductOwner();
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

  



      ssage(): void {

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


