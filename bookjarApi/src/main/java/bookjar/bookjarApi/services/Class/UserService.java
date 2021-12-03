package bookjar.bookjarApi.services.Class;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import bookjar.bookjarApi.dtos.LoginDTO;
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

    @Override
    public User login(LoginDTO credencials) {
        try {

            User user = userRepository.findByEmail(credencials.getEmail());

            if(comparePassword(credencials.getPassword(), user.getPassword())){
                user.getBooksList().forEach(a -> a.setUser(null));
                return user;
            }

            return new User();
            
        } catch (Exception e) {
            throw e;
        }
    }
    
    private boolean comparePassword(String requestPassword, String dbPassword){
        return encoder.matches(requestPassword, dbPassword);
    }

    @Override
    public User update(User user, int userId) {
        try {

            User userDb = userRepository.findById(userId).orElse(new User());

            if(userDb.getId() > 0){
                userDb.setEmail(user.getEmail());
                userDb.setFullName(user.getFullName());
                
                userDb.setBirthday(user.getBirthday());
                userDb.setInstagram(user.getInstagram());
                userDb.setTiktok(user.getTiktok());
                userDb.setDescription(user.getDescription());

                userRepository.save(userDb);
            }

            userDb.setBooksList(null);
            return userDb;
            
        } catch (Exception e) {
            throw e;
        }
    }

    @Override
    public User getById(int userId) {
        try {

            User user = userRepository.findById(userId).orElse(new User());
            
            if(user.getId() > 0)
                user.getBooksList().forEach(b -> b.setUser(null));

            return user;
            
        } catch (Exception e) {
            throw e;
        }
    }

    @Override
    public User changePassword(String password, int userId) {
        try {

            User userDb = userRepository.findById(userId).orElse(new User());

            if(userDb.getId() > 0){
                userDb.setPassword(encoder.encode(password));

                userRepository.save(userDb);
            }

            userDb.setBooksList(null);
            return userDb;
            
        } catch (Exception e) {
            throw e;
        }
    }
}
