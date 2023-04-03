import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MovieComponent } from './movie/movie.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MovielistComponent } from './movielist/movielist.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { PaymentComponent } from './payment/payment.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    EditAdminComponent,
    AdminlistComponent,
    AdmindetailsComponent,
    RegistrationComponent,
    LoginComponent,
    EditUserComponent,
    UserdetailsComponent,
    UserlistComponent,
    MovieComponent,
    AddmovieComponent,
    MoviedetailsComponent,
    MovielistComponent,
    EditMovieComponent,
    PaymentComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
