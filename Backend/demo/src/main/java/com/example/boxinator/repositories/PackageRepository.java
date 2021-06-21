package com.example.boxinator.repositories;

import com.example.boxinator.models.Packages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageRepository extends JpaRepository<Packages, Integer> {

}
