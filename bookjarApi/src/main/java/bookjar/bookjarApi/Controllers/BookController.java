package bookjar.bookjarApi.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import bookjar.bookjarApi.Services.Class.BookService;
import bookjar.bookjarApi.dtos.BookDTO;

@RestController
@RequestMapping("/Book")
public class BookController {
    
    private final BookService bookService;


    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/GetByTitle")
    public ResponseEntity register (@RequestParam String prefix){
        return ResponseEntity.ok(bookService.findByTitleStartingWith(prefix));
    }

    @PostMapping("/Create")
    public ResponseEntity register (@RequestBody BookDTO book){
        return ResponseEntity.ok(bookService.create(book));
    }

}
