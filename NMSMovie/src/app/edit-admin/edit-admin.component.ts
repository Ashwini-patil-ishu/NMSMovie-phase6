import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AdminClass } from '../Module/Admin-class';
import { AdminService } from '../Service/admin.service';
@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  admin:AdminClass;
  id:string|null;
  registerForm:FormGroup;
  submitted:boolean=false;
  constructor(private service:AdminService,private activatedroute:ActivatedRoute, private builder:FormBuilder,private router:Router) { }


  ngOnInit(): void {

    this.id=this.activatedroute.snapshot.paramMap.get('id');
    this.service.getAdminById(Number(this.id)).subscribe(x=>this.admin=x);

    this.registerForm=this.builder.group({
      name:['',Validators.required],
      email:['',Validators.required,Validators.email],
      country:['',Validators.required],
      login:['',Validators.required],
      password:['',Validators.required],

    });
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else
      {
        this.service.updateUser(this.admin,Number(this.id)).subscribe(x=>console.log(x));
        alert("Data Updated Successfully");
        this.router.navigate(['list'])
      }
  }
}