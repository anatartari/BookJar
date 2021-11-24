package bookjar.bookjarApi.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import bookjar.bookjarApi.dtos.BookDTO;
import bookjar.bookjarApi.services.Class.BookService;

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

    @GetMapping("/GetAll")
    public ResponseEntity getAll (){
        return ResponseEntity.ok(bookService.getAll());
    }

}
