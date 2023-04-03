
import { Component,OnInit } from '@angular/core';
import { AdminService } from '../Service/admin.service';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{

  isSubmitted= false;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:AdminService) { }

  ngOnInit(): void {
  }

  admin={
id:'',
password:'',
email:'',
  }
  checkAdmin():void{
    const data={
      id:this.admin.id,
      email:this.admin.email,
      password:this.admin.password,
    }
    if(!data.id){
      alert('please provide your ID');
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
    //get admin
    
    //this.service.getUserByEmail(this.user.email);
    this.service.getAdminByEmail(this.admin.id)
    .subscribe(data => {
      console.log(data.email+","+data.password+","+this.admin.email+","+this.admin.password); //You will get all your user related information in this field
      
      if((data.email==this.admin.email)&&(data.password==this.admin.password)){
        alert("Welcome !"+data.name);
      }
      else{
        alert("Wrong Email Id and Password");

      }
    });
     
    
  }
}