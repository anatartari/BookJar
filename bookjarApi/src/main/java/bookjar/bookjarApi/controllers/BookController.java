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

    @GetMapping("/GetDetails")
    public ResponseEntity getDetails (@RequestParam int bookId){
        return ResponseEntity.ok(bookService.getDetails(bookId));
    }

    @PutMapping("/Update")
    public ResponseEntity update (@RequestParam int bookId, @RequestBody BookDTO bookDto){
        return ResponseEntity.ok(bookService.update(bookId, bookDto));
    }

    @DeleteMapping("/Delete")
    public ResponseEntity delete (@RequestParam int bookId){
        bookService.Delete(bookId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
