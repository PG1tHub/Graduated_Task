package Graduated.Task.C2C;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class C2CApplication {

	public static void main(String[] args) {
		SpringApplication.run(C2CApplication.class, args);
	}



}
