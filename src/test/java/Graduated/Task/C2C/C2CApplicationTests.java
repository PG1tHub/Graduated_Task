package Graduated.Task.C2C;

import Graduated.Task.C2C.User.Entity.User;
import Graduated.Task.C2C.User.Repository.UserRepository;
import Graduated.Task.C2C.User.Service.UserService;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class C2CApplicationTests {
	@Autowired
	UserService userService;

	@Autowired
	UserRepository userRepository;

	@Autowired
	EntityManager em;

//	@Test
//	void contextLoads() throws Exception {
//		User user = new User("1","1","1");
//		userRepository.save(user);
//		em.clear();
//		String login = userService.login("1", "1");
//		System.out.println(login);
//	}

}

