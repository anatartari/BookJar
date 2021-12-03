package bookjar.bookjarApi.services.Interface;

import bookjar.bookjarApi.dtos.LoginDTO;
import bookjar.bookjarApi.models.User;

public interface IUserService {

    User create(User user);

    User update(User user, int userId);
    
    User login(LoginDTO credencials);

    User getById(int userId);

    User changePassword(String password, int userId);
}
