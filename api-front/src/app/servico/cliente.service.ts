import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "../modelo/Cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Url da API

  private url = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  //Método para listar todos os clientes

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url + '/listar');
  }
}
