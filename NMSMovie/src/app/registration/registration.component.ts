import { Component,OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  isSubmitted=false;

  constructor(private service:DataService){}

  ngOnInit(): void {
      
  }
  user={
    name:'',
    country:'',
    password:'',
    email:'',
    login:'',
  }

  //add record
  addUser():void{
    const data={
      name:this.user.name,
      email:this.user.email,
      country:this.user.country,
      password:this.user.password,
      login:this.user.login,
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
