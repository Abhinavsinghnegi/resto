import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = "http://localhost:3000/restaurants";

  constructor(private http : HttpClient) { }

  //API for getting data
  getList(){
    return this.http.get(this.url);
  }
  
  //API for adding data 
  saveResto = (data:any) => {
    return this.http.post(this.url, data)
  }

  //delete API , for deleting the data
  deleteResto = (id:number) => {
    return this.http.delete(`${this.url}/${id}`)
  }

  //API for getting data with id as parameter
  getCurrentResto = (id:number) => {
    return this.http.get(`${this.url}/${id}`)
  }

  //API for updating the content and updating the same on the list
  updateResto = (id:number, data:any) => {
    return this.http.put(`${this.url}/${id}`,data)
  }
}
