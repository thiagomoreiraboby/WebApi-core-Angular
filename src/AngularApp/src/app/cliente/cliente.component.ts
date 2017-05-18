import { Component, OnInit } from '@angular/core';
import { ClienteService } from "services/cliente.service";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  Models:any[];
  constructor(private service: ClienteService){}

  ngOnInit() {
      this.service.getClientes()
      .subscribe(x => this.Models = x);
  }

}
