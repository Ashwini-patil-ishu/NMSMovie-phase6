import { Component,OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import { AdminService } from '../Service/admin.service';
import { AdminClass } from '../Module/Admin-class';
@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent  implements OnInit{

  constructor(private router:Router, private service:AdminService) { }
  admins:AdminClass[];


  ngOnInit(): void {
    this.service.getAllAdmin().subscribe(result=>this.admins=result);
  }
  DeleteAdminById(id:number){
    //refresh the list once user is deleted
    this.admins=this.admins.filter(c=>c.id!=id);
    //delete user
    this.service.deleteById(id);
    console.log("user Deleted");
  }

}



