import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieClass } from '../Module/MovieClass';
import { MovieService } from '../Service/movie.service';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit{

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:MovieService){ }

  movie:MovieClass
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id:",id);
    this.service.getMovieById(Number(id)).subscribe(data=>this.movie=data)
  }

  btnClick() {
    this.router.navigateByUrl('/payment');
  };
}
