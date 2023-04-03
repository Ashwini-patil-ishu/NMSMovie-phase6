package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojo.Admin;
import com.example.demo.pojo.Movie;
import com.example.demo.service.MovieService;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/movie")
public class MovieController {
	
	@Autowired
	private MovieService service;
	
	@PostMapping("/")
	public ResponseEntity<Movie> addMovie(@RequestBody Movie m){
		Movie movie = service.addMovie(m);
		if(movie!=null)
			return new ResponseEntity<Movie> (movie, HttpStatus.CREATED);
		else
			return new ResponseEntity<Movie> (movie, HttpStatus.INTERNAL_SERVER_ERROR);
			
	}
	@GetMapping("/")
	public List<Movie> getAllMovie(){
		return service.getAllMovie();
	}
	@GetMapping("/{id}")
	public ResponseEntity<Movie>getMovieById (@PathVariable int id){
		Movie movie= service.getMovieById(id);
		
		if(movie!=null)
			return new ResponseEntity<Movie>(movie, HttpStatus.OK);
		else
			return new ResponseEntity<Movie>(movie, HttpStatus.NOT_FOUND);
	}
	
//	@GetMapping("/{T_name}")
//	public ResponseEntity<Movie>getMovieByT_name(@PathVariable String T_name){
//		Movie movie= service.getMovieByT_name(T_name);
//		
//		if(movie!=null)
//			return new ResponseEntity<Movie>(movie, HttpStatus.OK);
//		else
//			return new ResponseEntity<Movie>(movie, HttpStatus.NOT_FOUND);
//	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Object> updateMovie(@PathVariable int id,@RequestBody Movie newMovie){
		Movie movie= service.updateMovie(id, newMovie);
		
		if (movie!=null)
			return new ResponseEntity<Object>(movie,HttpStatus.OK);
		else
			return new ResponseEntity<Object>("No User Available to Update",HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String>deleteMovie(@PathVariable int id){
		boolean result = service.deleteMovie(id);
		if(result) 
			return new ResponseEntity<String>("Object Deleted",HttpStatus.OK);
		else
			return new ResponseEntity<String>("NO user Found", HttpStatus.NOT_FOUND);
		
	}
	

}
