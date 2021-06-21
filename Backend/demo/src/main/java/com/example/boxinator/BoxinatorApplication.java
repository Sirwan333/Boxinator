package com.example.boxinator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.example.boxinator.repositories")
@SpringBootApplication
public class BoxinatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(BoxinatorApplication.class, args);
	}

}
