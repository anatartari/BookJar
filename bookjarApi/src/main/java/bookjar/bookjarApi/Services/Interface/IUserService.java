package bookjar.bookjarApi.services.Interface;

import bookjar.bookjarApi.dtos.LoginDTO;
import bookjar.bookjarApi.models.User;

public interface IUserService {

    User create(User user);
    
    User login(LoginDTO credencials);
}
