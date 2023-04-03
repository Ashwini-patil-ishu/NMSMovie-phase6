import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MovielistComponent } from './movielist/movielist.component';
import { PaymentComponent } from './payment/payment.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"admin-login",component:AdminLoginComponent},
  {path:"admin-register",component:AdminRegisterComponent},
  {path:"edit-admin/:id",component:EditAdminComponent},
  {path:"adminlist",component:AdminlistComponent},
  {path:"admindetails/:id",component:AdmindetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"edit-user/:id",component:EditUserComponent},
  {path:"userdetails/:id",component:UserdetailsComponent},
  {path:"userlist",component:UserlistComponent},
  {path:"movie",component:MovieComponent},
  {path:"addmovie",component:AddmovieComponent},
  {path:"edit-movie/:id",component:EditMovieComponent},
  {path:"moviedetails/:id",component:MoviedetailsComponent},
  {path:"movielist",component:MovielistComponent},
  {path:"payment",component:PaymentComponent},
  {path:"ticket",component:TicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
