package bookjar.bookjarApi.Services.Class;

import org.springframework.stereotype.Service;

import bookjar.bookjarApi.Models.User;
import bookjar.bookjarApi.Repository.IUserRepository;
import bookjar.bookjarApi.Services.Interface.IUserService;

@Service
public class UserService implements IUserService {

    private final IUserRepository userRepository;

    public UserService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User create(User user) {
        try {

            return userRepository.save(user);
            
        } catch (Exception e) {
            throw e;
        }
    }
    
}
