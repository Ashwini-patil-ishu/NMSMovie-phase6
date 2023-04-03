import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{MovieClass} from '../Module/MovieClass';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url:string="http://localhost:8082/api/movie/";
  constructor(private http:HttpClient) { }
    //get all medicines
  getAllMovie():Observable<MovieClass[]>{
    return this.http.get<MovieClass[]>(this.url);
  
  }
  //create record
 create(data:any ):Observable<any>{
  return this.http.post(this.url,data).pipe();
}
getMovieById(id:number):Observable<MovieClass>{
  return this.http.get<MovieClass>(this.url+id);
}

getMovieByName(name:string):Observable<MovieClass>{
  return this.http.get<MovieClass>(this.url+name);
}
getMovieList():Observable<MovieClass[]>{
  return this.http.get<MovieClass[]>(`${this.url}/cust`);
}
//deleteById
deleteById(id:number){
  let myid=id;
  this.http.delete(this.url+myid).subscribe(data=>{
    return this.getAllMovie();
  });
}

//update Movie
updateMovie(cust:MovieClass,id:number){
  return this.http.put(this.url+id,cust);
}
}
