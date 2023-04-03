package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.pojo.Admin;
import com.example.demo.repo.AdminRepo;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepo repo;
	
	
	public Admin addAdmin(Admin a) {
		return repo.save(a);
	}
	public List<Admin> getAllAdmin(){
		return repo.findAll();
	}
	public Admin getAdminById(int id) {
		if(repo.findById(id).isPresent()) {
			return repo.findById(id).get();
		}
		else {
			return null;
		}
	}
	
	public Admin updateAdmin(int id, Admin newAdmin) {
		if(repo.findById(id).isPresent()) {
			Admin admin = repo.findById(id).get();
			admin.setName(newAdmin.getName());
			admin.setEmail(newAdmin.getEmail());
			admin.setCountry(newAdmin.getCountry());
			admin.setPassword(newAdmin.getPassword());
			admin.setLogin(newAdmin.getLogin());
			return repo.save(admin);
		}
		else {
			return null;
		}
	}
	
	public boolean deleteAdmin(int id) {
		if (repo.findById(id).isPresent()){
			repo.deleteById(id);
			return true;
		}
		else {
			return false;
		}
	}

}
