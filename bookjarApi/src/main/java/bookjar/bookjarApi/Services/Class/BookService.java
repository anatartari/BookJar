package bookjar.bookjarApi.Services.Class;

import java.util.*;

import org.springframework.data.repository.support.Repositories;
import org.springframework.stereotype.Service;

import bookjar.bookjarApi.Models.Book;
import bookjar.bookjarApi.Models.User;
import bookjar.bookjarApi.Repository.IBookRepository;
import bookjar.bookjarApi.Repository.IUserRepository;
import bookjar.bookjarApi.Services.Interface.IBookService;
import bookjar.bookjarApi.dtos.BookDTO;

@Service
public class BookService implements IBookService {

    private final IBookRepository bookRepository;

    private final IUserRepository userRepository;

    public BookService(IBookRepository bookRepository, IUserRepository userRepository) {
        this.bookRepository = bookRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<BookDTO> findByTitleStartingWith(String prefix) {

        List<Book> bookList = bookRepository.findByTitleStartingWith(prefix);

        List<BookDTO> bookDtoList = new ArrayList<BookDTO>();

        bookList.forEach(b -> bookDtoList.add(new BookDTO(b)));

        return bookDtoList;
    }

    @Override
    public BookDTO create(BookDTO book) {
        try {
            
           User user = userRepository.getById(book.getUserId());

           Book newBook = new Book(book);
           newBook.setUser(user); 

           newBook = bookRepository.save(newBook);        
           
           return new BookDTO(newBook);

        } catch (Exception e) {
            throw e;
        }
    }
    
}
