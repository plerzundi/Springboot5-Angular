import {Injectable} from '@angular/core';
import {Cliente} from './cliente';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map } from 'rxjs/operators';


@Injectable()
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getClientes(): Observable<Cliente[]> {
    /*return of(CLIENTES);*/
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Cliente[]));
  }

  create(cliente: Cliente): Observable<Cliente> {

    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.HttpHeaders});

  }

  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.HttpHeaders});
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.HttpHeaders});
  }

}
