import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private echo: Echo;
  private apiUrl = 'http://localhost:8000/api/messages';
  private messageSubject: Subject<any> = new Subject<any>();
  


  constructor(private http: HttpClient) {
    this.echo = new Echo({
      broadcaster: 'pusher',
      key: 'local',
      cluster: 'mtl',
      wsHost: window.location.hostname,
      wsPort: 6001,
      forceTLS: false,
      disableStats: true,
      enabledTransports: ['ws', 'wss'],
      wsPath: '',
    });

    this.listenToMessages();
  }


  private listenToMessages(): void {
    this.echo.channel('chat').listen('Chat', (message: any) => {
      console.log('Received message from server:', message);
      this.messageSubject.next(message);
    });
  }

  sendMessage(senderId: number, receiverId: number, content: string): Observable<any> {
    const body = { sender_id: senderId, receiver_id: receiverId, content: content };
    return this.http.post<any>(this.apiUrl+'/store', body);
  }

  getMessages(userSend: number, userRecu: number): Observable<any[]> {
    const params = { user_send: userSend.toString(), user_recu: userRecu.toString() };
    return this.http.get<any[]>(this.apiUrl+'/index', { params: params });
  }

  getMessageObservable(): Observable<any> {
    return this.messageSubject.asObservable();
  }
  


}
