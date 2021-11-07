package bookjar.bookjarApi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import bookjar.bookjarApi.Models.User;

public interface IUserRepository extends JpaRepository<User, Integer> {
    
}
