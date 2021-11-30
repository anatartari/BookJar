package bookjar.bookjarApi.services.Class;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import bookjar.bookjarApi.models.User;
import bookjar.bookjarApi.repository.IUserRepository;
import bookjar.bookjarApi.services.Interface.IUserService;

@Service
public class UserService implements IUserService {

    private final IUserRepository userRepository;
    private final PasswordEncoder encoder;


    public UserService(IUserRepository userRepository, PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;

    }

    @Override
    public User create(User user) {
        try {

            user.setPassword(encoder.encode(user.getPassword()));
            return userRepository.save(user);
            
        } catch (Exception e) {
            throw e;
        }
    }
    
}
