package com.example.boxinator.controllers;

import com.example.boxinator.models.Packages;
import com.example.boxinator.repositories.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PackageController {
    @Autowired
    PackageRepository packageRepository;
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/listboxes")
    public List<Packages> getAll() {
        return packageRepository.findAll();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/addbox", produces = "application/json", consumes = "application/json")
    public List<Packages> savePackage(@RequestBody Packages packages) {
        packageRepository.save(packages);
        return packageRepository.findAll();
    }
}
