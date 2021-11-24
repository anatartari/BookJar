package bookjar.bookjarApi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import bookjar.bookjarApi.models.User;

public interface IUserRepository extends JpaRepository<User, Integer> {
    
}
