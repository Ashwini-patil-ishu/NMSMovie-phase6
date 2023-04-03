import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { MovieClass } from '../Module/MovieClass';
import { MovieService } from '../Service/movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  constructor(private router:Router, private service:MovieService) { }
  movie:MovieClass[];
  ngOnInit(): void {
    this.service.getAllMovie().subscribe(result=>this.movie=result);
  }
  DeleteMovieById(id:number){
    //refresh the list once user is deleted
    this.movie=this.movie.filter(c=>c.id!=id);
    //delete user
    this.service.deleteById(id);
    console.log("movie Deleted");

}
}
