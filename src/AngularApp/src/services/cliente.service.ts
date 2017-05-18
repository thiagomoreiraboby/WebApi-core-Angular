import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ClienteDto } from "models/clienteDto";

@Injectable()
export class ClienteService {
  myApiUrl = 'http://localhost:5000/api/clientes';
  constructor(private http: Http) { }

  getClientes(): Observable<ClienteDto[]> {
    return this.http.get(this.myApiUrl)
      .map(res => res.json());
  }
  getCliente(id:number): Observable<ClienteDto> {

    return this.http.get(this.myApiUrl+"/"+ id)
      .map(res => res.json() as ClienteDto);
      
  }
  addCliente (body: Object): Observable<ClienteDto> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.myApiUrl, body, options) // ...using post request
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
                        
    }   
  updateCliente(body: Object): Observable<ClienteDto> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(this.myApiUrl, body, options) // ...using post request
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
                        
  }
  removeCliente (id:string): Observable<ClienteDto> {
        return this.http.delete('${this.myApiUrl}/${id}') // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

}
