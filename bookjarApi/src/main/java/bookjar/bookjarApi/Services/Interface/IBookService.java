package bookjar.bookjarApi.services.Interface;

import java.util.List;

import bookjar.bookjarApi.dtos.BookDTO;

public interface IBookService {
    
    List<BookDTO> findByTitleStartingWith(String prefix);

    List<BookDTO> getAll();

    BookDTO create(BookDTO book);

    BookDTO getDetails(int booktId);
    
}
