import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RolService {

  apiUrl = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  listarRoles() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.apiUrl + '/rol',  { headers });
  }
}
