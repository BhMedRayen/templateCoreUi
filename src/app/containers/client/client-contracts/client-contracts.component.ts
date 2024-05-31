import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-client-contracts',
  templateUrl: './client-contracts.component.html',
  styleUrl: './client-contracts.component.scss'
})
export class ClientContractsComponent implements OnInit{

  clientId: number = 0;
  contracts : any [] = []
  loading : boolean = false 

  constructor(
    private route: ActivatedRoute,
    private contractService : ContractService
    ) { }
  
  
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = parseInt(params['id'], 10);
    });
    this.getContractsByClientId()
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
