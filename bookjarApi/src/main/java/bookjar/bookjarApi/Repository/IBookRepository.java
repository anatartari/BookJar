package bookjar.bookjarApi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import bookjar.bookjarApi.models.*;

@Repository
public interface IBookRepository extends JpaRepository<Book, Integer> {
    
    List<Book> findByTitleStartingWith(String prefix);

}