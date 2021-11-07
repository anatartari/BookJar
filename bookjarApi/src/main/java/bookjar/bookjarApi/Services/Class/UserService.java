package bookjar.bookjarApi.Services.Class;

import bookjar.bookjarApi.Models.User;
import bookjar.bookjarApi.Repository.IUserRepository;
import bookjar.bookjarApi.Services.Interface.IUserService;

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
