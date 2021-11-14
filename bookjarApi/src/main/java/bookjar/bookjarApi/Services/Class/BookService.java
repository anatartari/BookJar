package bookjar.bookjarApi.services.Class;

import java.util.*;

import org.springframework.stereotype.Service;

import bookjar.bookjarApi.dtos.BookDTO;
import bookjar.bookjarApi.models.Book;
import bookjar.bookjarApi.models.User;
import bookjar.bookjarApi.repository.IBookRepository;
import bookjar.bookjarApi.repository.IUserRepository;
import bookjar.bookjarApi.services.Interface.IBookService;

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

    @Override
    public List<BookDTO> getAll() {
        List<Book> bookList = bookRepository.findAll();

        List<BookDTO> bookDtoList = new ArrayList<BookDTO>();

        bookList.forEach(b -> bookDtoList.add(new BookDTO(b)));

        return bookDtoList;
    }

    @Override
    public BookDTO getDetails(int booktId) {
        // TODO Auto-generated method stub
        return null;
    }
    
}
