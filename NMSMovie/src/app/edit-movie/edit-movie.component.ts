import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { MovieClass } from '../Module/MovieClass';
import { MovieService } from '../Service/movie.service';
@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit{

  movie: MovieClass;
  id: string | null;
  registerForm!: FormGroup;
  submitted:boolean=false;
  constructor(private service:MovieService,private activatedroute:ActivatedRoute, private builder:FormBuilder,private router:Router) { }


  ngOnInit(): void {

    this.id=this.activatedroute.snapshot.paramMap.get('id');
    this.service.getMovieById(Number(this.id)).subscribe(x=>this.movie=x);

    this.registerForm=this.builder.group({
      name:['',Validators.required],
      images:['',Validators.required],
      director:['',Validators.required],
      genre:['',Validators.required],
      language:['',Validators.required],
      show_time:['',Validators.required],
      show_date:['',Validators.required],
      t_name:['',Validators.required],
      price:['',Validators.required],
      

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
        this.service.updateMovie(this.movie,Number(this.id)).subscribe(x=>console.log(x));
        alert("Data Updated Successfully");
        this.router.navigate(['list'])
      }
  }
}

