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

  

  
}


