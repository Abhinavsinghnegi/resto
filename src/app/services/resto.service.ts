import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  private url = "http://localhost:3000/restaurants";

  constructor(private http : HttpClient) { }

  getList(){
    return this.http.get(this.url);
  }
}
