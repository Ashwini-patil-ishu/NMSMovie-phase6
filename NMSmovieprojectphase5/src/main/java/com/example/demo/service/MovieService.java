package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.pojo.Movie;
import com.example.demo.repo.MovieRepo;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepo repo;
	
	public Movie addMovie(Movie m) {
		return repo.save(m);
	}
	
	public List<Movie> getAllMovie(){
		return repo.findAll();
	}
	public Movie getMovieById(int id) {
		if(repo.findById(id).isPresent()) {
			return repo.findById(id).get();
		}
		else {
			return null;
		}
	}

	public Movie updateMovie (int id, Movie newMovie) {
		if(repo.findById(id).isPresent()) {
			Movie movie = repo.findById(id).get();
			 movie.setImages(newMovie.getImages());
			movie.setName(newMovie.getName());
			movie.setDirector(newMovie.getDirector());
		    movie.setGenre(newMovie.getGenre());
		    movie.setLanguage(newMovie.getLanguage());
		    movie.setPrice(newMovie.getPrice());
		    movie.setShow_time(newMovie.getShow_time());
		    movie.setShow_date(newMovie.getShow_date());
		    movie.setT_name(newMovie.getT_name());

			return repo.save(movie);
		}
		else
		{
			return null;
		}
	}
		
		public boolean deleteMovie(int id) {
			if (repo.findById(id).isPresent()){
				repo.deleteById(id);
				return true;
			}
			else {
				return false;
			}
		}

}
