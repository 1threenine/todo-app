import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const baseUrl = "http://localhost:3000/users";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  list() {
   // console.log("Todo display")
    return this.http.get(baseUrl + "/home", {
      withCredentials: true
    })
  }
  add(content: any) {
    
    return this.http.post(baseUrl + "/addtodo", {
      content
    }, { withCredentials: true })
  }

  

  sort(pid, pord, cid, cord) {
    
    return this.http.post(baseUrl + "/sorttodo", {
      pid, pord, cid, cord
    }, { withCredentials: true })
  }






}
