import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ClienteService } from "services/cliente.service";
import { FormsModule }    from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { ClienteDto } from "models/clienteDto";

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  idRouter;
  model: ClienteDto;
  editing: boolean;
  inscricao;
  constructor(private route: ActivatedRoute,
     private router: Router,private service: ClienteService) { }

  ngOnInit() {
     this.editing = false;
      this.inscricao = this.route.params.subscribe(params => {
            if(params['id']!=null){
                this.idRouter = params['id'];
                this.service.getCliente(this.idRouter).
                subscribe(x => this.model = x);
                this.editing = true;
              }
            else this.model = new ClienteDto(null,null, null,null);
       });
  }
 submitComment(){
        if(!this.editing){
            this.inscricao = this.service.addCliente(this.model).subscribe(()=>{
             console.log('completed');
              this.voltarCliente();
            })

        } else {
            this.inscricao = this.service.updateCliente(this.model).subscribe(()=>{
              console.log('completed');
              this.voltarCliente();
            })
        }

      
        
 }

  voltarCliente(){
    this.router.navigate(['/cliente']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
