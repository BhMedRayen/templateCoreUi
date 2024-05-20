// import { Component, OnInit } from '@angular/core';
// import { MessageService } from '../../../../services/message.service';
// import { EmployeeServiceService } from 'src/app/services/employee-service.service';

// @Component({
//   selector: 'app-employee-inbox',
//   templateUrl: './emp-inbox.component.html',
//   styleUrls: ['./emp-inbox.component.scss']
// })
// export class EmpInboxComponent implements OnInit {
//   messages: any[] = [];
//   messageContent: string = '';
//   user: any;
//   selectedUserId: number = 0; // Store the ID of the selected user
//   employees: any[] = [];

//   constructor(
//     private messageService: MessageService,
//     private empService: EmployeeServiceService
//   ) {}

//   ngOnInit(): void {
//     const userData = localStorage.getItem('employee');
//     if (userData) {
//       this.user = JSON.parse(userData);
//     } else {
//       console.error('User data not found in local storage.');
//     }
//     this.getEmployees();
//     this.messageService.listenToMessages((message: any) => {
//       console.log('Received new message:', message);
//       // Filter messages based on selected user and authenticated user
//       if (
//         (message.sender_id === this.user.id && message.receiver_id === this.selectedUserId) ||
//         (message.sender_id === this.selectedUserId && message.receiver_id === this.user.id)
//       ) {
//         this.messages.push(message);
//       }
//     });
//   }

//   getEmployees(): void {
//     this.empService.getConfirmedEmp().subscribe({
//       next: (response: any) => {
//         this.employees = response.users;
//       },
//       error: (error: any) => {
//         console.log('Error fetching users ', error);
//       }
//     });
//   }

//   selectUser(userId: number): void {
//     this.selectedUserId = userId; // Store the ID of the selected user
//     this.messages = []; // Clear previous messages
//   }

//   sendMessage(): void {
//     if (!this.selectedUserId) {
//       console.error('No user selected.');
//       return;
//     }
//     const messageData = {
//       sender_id: this.user.id,
//       receiver_id: this.selectedUserId,
//       content: this.messageContent
//     };
  
//     this.messageService.sendMessage(messageData).subscribe({
//       next: (response: any) => {
//         console.log('Message sent successfully:', response);
//         this.messages.push(response);
//         this.messageContent = ''; // Clear message input
//       },
//       error: (error: any) => {
//         console.error('Error sending message:', error);
//       }
//     });
//   }
// }
