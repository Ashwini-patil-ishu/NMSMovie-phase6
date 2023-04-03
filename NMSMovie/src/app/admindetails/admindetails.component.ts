import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../Service/admin.service';
import { AdminClass } from '../Module/Admin-class';
@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:AdminService) { }

  admin:AdminClass
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id:",id);
    this.service.getAdminById(Number(id)).subscribe(data=>this.admin=data)
  }
}
