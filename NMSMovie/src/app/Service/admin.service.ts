import { Injectable } from '@angular/core';
import { AdminClass } from '../Module/Admin-class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string="http://localhost:8082/api/admin/";

  //inject the DI
 constructor(private http:HttpClient) { }

 //get all user
 getAllAdmin():Observable<AdminClass[]>{
   return this.http.get<AdminClass[]>(this.url);

 }

  //get user by email
  getAdminByEmail(email:string):Observable<AdminClass>{
   return this.http.get<AdminClass>(this.url+email);
 }
 getAdminById(id:number):Observable<AdminClass>{
   return this.http.get<AdminClass>(this.url+id);
 }
 //create record
 create(data:any ):Observable<any>{
   return this.http.post(this.url,data).pipe();
 }
 //deleteById
 deleteById(id:number){
   let myid=id;
   this.http.delete(this.url+myid).subscribe(data=>{
     return this.getAllAdmin();
   });
 }

 //update user
 updateUser(cust:AdminClass,id:number){
   return this.http.put(this.url+id,cust);
 }
}