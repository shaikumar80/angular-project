import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public http:HttpClient) { }

  getuserDetails():Observable<any>{
    return this.http.get("http://localhost:3000/posts");
  }


  senduserDetails(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/posts",data);
  }

  deleteUserData(i:any):Observable<any>{
    return this.http.delete("http://localhost:3000/posts/"+i);
  }

  updateUserData(data:any,id:any):Observable<any>{
    return this.http.put("http://localhost:3000/posts/"+id,data);
  }

  // updateuserDetails(data:any):Observable<any>{
  //   return this.http.put("https://jsonplaceholder.typicode.com/posts"+1,data);
  // }
}
