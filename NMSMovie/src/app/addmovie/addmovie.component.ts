import { Component,OnInit } from '@angular/core';
import { MovieService } from '../Service/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit{
  isSubmitted=false;
  constructor(private service:MovieService){}
  ngOnInit(): void {
      
  }

  movie={
   
    name:'',
	 director:'',
	 genre:'',
	 language:'',
	 show_time:'',
	 show_date:'',
	 t_name:'',
	 price:'',
	  images:'',
  }
  addMovie(){
    const data={

      name:this.movie.name,
      director:this.movie.director,
      genre:this.movie.genre,
      language:this.movie.language,
      show_time:this.movie.show_time,
      show_date:this.movie.show_date,
      t_name:this.movie.t_name,
      price:this.movie.price,
       images:this.movie.images

    }
    if(!data.name){
      alert("movie name shouls not be empty");
      return;
    }
    if(!data.director){
      alert("movie director shouls not be empty");
      return;
    }
    if(!data.genre){
      alert("movie genre should not be empty");
      return;
    }
   
    if(!data.language){
      alert("movie language should not be empty");
      return;
    }
    if(!data.show_time){
      alert("movie show_time should not be empty");
      return;
    }
    if(!data.show_date){
      alert("movie show_date should not be empty");
      return;
    }
    if(!data. t_name){
      alert("movie T_name should not be empty");
      return;
    }
    
    if(!data. price){
      alert("movie price should not be empty");
      return;
    }
    if(!data.images){
      alert("movie images should not be empty");
      return;
    }
    this.service.create(data).subscribe(
      response=>{ console.log(response);
        this.isSubmitted=true},
        error=>{console.log(error);}

    )

  }

}
