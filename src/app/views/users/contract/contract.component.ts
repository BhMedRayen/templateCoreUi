import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import {ContractService} from 'src/app/services/contract.service'
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-contract',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss'
})
export class ContractComponent implements OnInit{
    contracts: any[] = [];
    work_type: string = ''
    start_date: string =''
    end_date: string =''
    amount: number = 0
    loading : boolean = false 
    clientId : number =0;
    client : any 
    clientPhoto : string = ''

  constructor (
    private userService : UsersService,
    private route: ActivatedRoute,
    private contractService : ContractService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = +params['id'];
      console.log("client id",this.clientId);
      this.getClientById();
    });
    this.getContractsByClientId();
  }

  getClientById () : void {
    this.userService.getUserById(this.clientId).subscribe({
      next : (response :any)=> {
        this.client=response.user
        this.clientPhoto= "http://localhost:8000"+ this.client.photo 
        console.log("Client : " , this.client);
      },
      error :(error : any)=> {
        console.log("error fetching user",error);
        
      }
    })
  }

  

  createAndDownloadContract() {
    if (!this.client) {
      console.error('Client data is not available');
      return;
    }

    const data = {
      work_type: this.work_type,
      start_date: this.start_date,
      end_date: this.end_date,
      amount: this.amount
    };

    this.loading = true;
    
    this.contractService.createContract(this.clientId, data).subscribe((response: Blob) => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'contract.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      this.loading=false
      location.reload()
    }, error => {
      console.error('Error downloading contract:', error);
    });
  }

  getContractsByClientId(): void {
    this.contractService.getContractsByClientId(this.clientId).subscribe({
      next: (response: any) => {
        this.contracts = response.contracts;
        console.log("Contracts:", this.contracts);
      },
      error: (error: any) => {
        console.log("Error fetching contracts", error);
      }
    });
  }

  downloadContract(contractId: number) {
    this.loading = true;
    this.contractService.downloadContract(contractId).subscribe((response: Blob) => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'contract.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      this.loading = false;
    }, error => {
      console.error('Error downloading contract:', error);
      this.loading = false;
    });
  }

}
