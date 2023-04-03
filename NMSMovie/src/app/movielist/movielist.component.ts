import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router } from '@angular/router';
import { MovieClass } from '../Module/MovieClass';
import { MovieService } from '../Service/movie.service';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit{

  // cart:Array<cart>=[]
  email:string=""
  msg:string=""
  // items:Array<cart>=[]
  price:number=0
  user:string=""
  movie:MovieClass[]
  movies:any

  constructor(private router:Router, private service:MovieService,  private http:HttpClient) { }
 
  ngOnInit(): void {
    this.service.getAllMovie().subscribe(result=>this.movie=result);
    let obj = sessionStorage.getItem("userdetails");
    if(obj!=null){
      this.user=obj;
      this.email=obj;
    }
    // this.viewcart(this.email);
  

    let response = this.http.get("http://localhost:8082/api/medicine/getAllMovie");
    response.subscribe((data)=>{
      this.movies =data;
      console.log(this.movie);
    });
  }

  // addcart(acart:any){
  //   let cart ={email:this.user,price:this.price};
  //   this.cartservice.addcart(cart).subscribe({
  //     next:(result:any)=>{if(result=="Added to cart"){
  //       alert ("added to cart")
  //     }},
  //     error:(error:any )=>console.log(error),
  //     complete:()=>{"completed"}
      

  //   })
  // }

  // viewcart(email:string){
  //   this.cartservice.viewmyCart(this.email).subscribe({
  //    next:(result:any)=>this.msg=result,
  //    error:(error:any)=>console.log(error),
  //    complete:()=>console.log("completed")
   
  //   })
  //  }
  //  bill(email:string){
  //    this.cartservice.delRequest(email).subscribe({
  //      next:(result:any)=>this.msg=result,
  //      error:(error:any)=>console.log(error),
  //      complete:()=>console.log("completed")
  //    })
  //  }
   
  //  deleteItem(email:string){
  //    this.cartservice.delRequest(email).subscribe({
  //      next:(result:any)=>this.msg=result,
  //      error:(error:any)=>console.log(error),
  //      complete:()=>this.viewcart(email)
  //    })
   
  //  }

}
