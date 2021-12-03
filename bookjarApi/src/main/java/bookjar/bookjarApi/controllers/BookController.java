package bookjar.bookjarApi.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import bookjar.bookjarApi.dtos.BookDTO;
import bookjar.bookjarApi.services.Class.BookService;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping("/Book")
public class BookController {
    
    private final BookService bookService;


    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/GetByTitle/{prefix}")
    public ResponseEntity register (@PathVariable String prefix){
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

    @GetMapping("/GetDetails/{bookId}")
    public ResponseEntity getDetails (@PathVariable int bookId){
        return ResponseEntity.ok(bookService.getDetails(bookId));
    }

    @PutMapping("/Update/{bookId}")
    public ResponseEntity update (@PathVariable int bookId, @RequestBody BookDTO bookDto){
        return ResponseEntity.ok(bookService.update(bookId, bookDto));
    }

    @DeleteMapping("/Delete/{bookId}")
    public ResponseEntity delete (@PathVariable int bookId){
        bookService.Delete(bookId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
