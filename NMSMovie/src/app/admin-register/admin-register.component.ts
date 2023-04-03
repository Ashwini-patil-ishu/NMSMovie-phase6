import { Component,OnInit } from '@angular/core';
import { AdminService } from '../Service/admin.service';
@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit{

  isSubmitted=false;

  constructor(private service:AdminService){}

  ngOnInit(): void {
      
  }
  admin={
    name:'',
    country:'',
    password:'',
    email:'',
    login:'',
  }
  
  //add record
  addAdmin():void{
    const data={
      name:this.admin.name,
      email:this.admin.email,
      country:this.admin.country,
      password:this.admin.password,
      login:this.admin.login,
    }

    if(!data.name){
      alert('please provide name');
      return;
    }
    if(!data.email){
      alert('please provide email');
      return;
    }
    if(!data.password){
      alert('please provide password');
      return;
    }
    if(!data.country){
      alert('please provide country');
      return;
    }

    this.service.create(data).subscribe(
     response=>{console.log(response);
    this.isSubmitted=true},
    error=>{console.log(error);
    
      }
    )
  }

}
