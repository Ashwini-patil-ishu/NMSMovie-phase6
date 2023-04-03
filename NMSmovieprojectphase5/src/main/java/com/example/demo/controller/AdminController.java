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
import com.example.demo.pojo.User;
import com.example.demo.service.AdminService;
@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/admin")
public class AdminController {
	
	@Autowired
	private AdminService service;
	
	@PostMapping("/")
	public ResponseEntity<Admin> addAdmin(@RequestBody Admin a){
		
		Admin admin= service.addAdmin(a);
		
		if(admin!=null)
			return new ResponseEntity<Admin>(admin,HttpStatus.CREATED);
		else
			return new ResponseEntity<Admin>(admin,HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	@GetMapping("/")
	public List<Admin> getAllAdmin(){
		return service.getAllAdmin();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Admin>getAdminById (@PathVariable int id){
		Admin admin= service.getAdminById(id);
		
		if(admin!=null)
			return new ResponseEntity<Admin>(admin, HttpStatus.OK);
		else
			return new ResponseEntity<Admin>(admin, HttpStatus.NOT_FOUND);
	}
	@PutMapping("/{id}")
	public ResponseEntity<Object> updateAdmin(@PathVariable int id,@RequestBody Admin newAdmin){
		Admin admin= service.updateAdmin(id, newAdmin);
		
		if (admin!=null)
			return new ResponseEntity<Object>(admin,HttpStatus.OK);
		else
			return new ResponseEntity<Object>("No User Available to Update",HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String>deleteAdmin(@PathVariable int id){
		boolean result = service.deleteAdmin(id);
		if(result) 
			return new ResponseEntity<String>("Object Deleted",HttpStatus.OK);
		else
			return new ResponseEntity<String>("NO user Found", HttpStatus.NOT_FOUND);
		
	}

}
