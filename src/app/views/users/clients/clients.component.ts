import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  
  clients: any[] = [];
  clientPhoto: string = '';
  currentPage = 1;
  itemsPerPage = 3;
  totalPagesArray: number[] = [];
  filteredClients: any[] = [];
  searchQuery: string = '';

  constructor(private userService: UsersService) {}
  
  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(): void {
    this.userService.getAallClients().subscribe({
      next: (response: any) => {
        this.clients = response.users.map((client: any) => {
          client.photo = 'http://localhost:8000' + client.photo;
          return client;
        });
        this.filteredClients = [...this.clients];
        this.calculateTotalPages();
      }
    });
  }

  calculateTotalPages() {
    const totalPages = Math.ceil(this.filteredClients.length / this.itemsPerPage); 
    this.totalPagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  get paginatedClients() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredClients.slice(startIndex, startIndex + this.itemsPerPage);
  }


  nextPage() {
    if ((this.currentPage * this.itemsPerPage) < this.filteredClients.length) {
      this.currentPage++;
    }
  }


  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  filterClients() {
    const query = this.searchQuery.toLowerCase();
    this.filteredClients = this.clients.filter(client =>
      client.name.toLowerCase().includes(query) || client.lastName.toLowerCase().includes(query)
    );
    this.currentPage = 1;
    this.calculateTotalPages();
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
}
