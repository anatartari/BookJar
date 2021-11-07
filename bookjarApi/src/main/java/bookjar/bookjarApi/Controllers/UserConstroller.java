package bookjar.bookjarApi.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import bookjar.bookjarApi.Models.User;
import bookjar.bookjarApi.Services.Class.UserService;

@RestController
@RequestMapping("/User")
public class UserConstroller {
    
    private final UserService userService;


    public UserConstroller(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/Register")
    public ResponseEntity register (@RequestBody User user){
        return ResponseEntity.ok(userService.create(user));
    }
}
