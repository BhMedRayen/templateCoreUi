import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private echo: Echo;
  private apiUrl = 'http://localhost:8000/api/messages';


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
  }



  listenToMessages(callback: (message: any) => void): void {
    this.echo.channel('chat').listen('Chat', (message: any) => {
      callback(message);
    });
  }

  sendMessage(messageData: any): Observable<any> {
    return this.http.post(this.apiUrl, messageData);
  }




  storeMessage(messageData: any): Observable<any> {
    return this.http.post(this.apiUrl, messageData);
  }


}
