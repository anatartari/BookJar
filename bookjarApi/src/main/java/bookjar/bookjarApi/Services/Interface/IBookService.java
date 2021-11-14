package bookjar.bookjarApi.Services.Interface;

import java.util.List;

import bookjar.bookjarApi.dtos.BookDTO;

public interface IBookService {
    
    List<BookDTO> findByTitleStartingWith(String prefix);

    List<BookDTO> getAll();

    BookDTO create(BookDTO book);
    
}
