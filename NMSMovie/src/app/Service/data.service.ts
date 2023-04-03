import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserClass } from '../Module/UserClass';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string="http://localhost:8082/api/user/";

   //inject the DI
  constructor(private http:HttpClient) { }

  //get all user
  getAllUser():Observable<UserClass[]>{
    return this.http.get<UserClass[]>(this.url);

  }

   //get user by email
   getUserByEmail(email:string):Observable<UserClass>{
    return this.http.get<UserClass>(this.url+email);
  }
  getUserById(id:number):Observable<UserClass>{
    return this.http.get<UserClass>(this.url+id);
  }
  //create record
  create(data:any ):Observable<any>{
    return this.http.post(this.url,data).pipe();
  }
  //deleteById
  deleteById(id:number){
    let myid=id;
    this.http.delete(this.url+myid).subscribe(data=>{
      return this.getAllUser();
    });
  }

  //update user
  updateUser(cust:UserClass,id:number){
    return this.http.put(this.url+id,cust);
  }
}
