package bookjar.bookjarApi.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import bookjar.bookjarApi.dtos.LoginDTO;
import bookjar.bookjarApi.models.User;
import bookjar.bookjarApi.services.Class.UserService;
import bookjar.bookjarApi.services.Interface.IUserService;

@CrossOrigin(origins = "http://localhost:3000/",
allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.PATCH, RequestMethod.DELETE})
@RestController
@RequestMapping("/User")
public class UserConstroller {
    
    private final IUserService userService;


    public UserConstroller(IUserService userService) {
        this.userService = userService;
    }

    @PostMapping("/Register")
    public ResponseEntity register (@RequestBody User user){
        return ResponseEntity.ok(userService.create(user));
    }

    @PostMapping("/Login")
    public ResponseEntity login (@RequestBody LoginDTO login) {
        return ResponseEntity.ok(userService.login(login));
    }

    @PutMapping("/Update/{userId}")
    public ResponseEntity Update (@RequestBody User user, @PathVariable int userId) {
        return ResponseEntity.ok(userService.update(user, userId));
    }

   
    @GetMapping("/getById/{userId}")
    public ResponseEntity getById (@PathVariable int userId) {
        return ResponseEntity.ok(userService.getById(userId));
    }
}
