package bookjar.bookjarApi.dtos;

import java.sql.Date;

import bookjar.bookjarApi.Models.Book;

public class BookDTO {
    
    private int BookId;

    private String Title;

    private String Author;

    private String Edition;

    private int Rating;

    private int Status;

    private Date ReadAt;

    private String Comment;

    private String Color;

    private int UserId;

public BookDTO(){}

    public BookDTO(Book book){
        Title = book.getTitle();
        Author = book.getAuthor();
        Edition = book.getEdition();
        Rating = book.getRating();
        Status = book.getStatus();
        ReadAt = book.getReadAt();
        Comment = book.getComment();
        Color = book.getColor();
        UserId = book.getUser().getId();
    }

    public BookDTO(String title, String author, String edition, int rating, int status, Date readAt, String comment,
            String color, int userId) {
        Title = title;
        Author = author;
        Edition = edition;
        Rating = rating;
        Status = status;
        ReadAt = readAt;
        Comment = comment;
        Color = color;
        UserId = userId;
    }

    /**
     * @return String return the Title
     */
    public String getTitle() {
        return Title;
    }

    /**
     * @param Title the Title to set
     */
    public void setTitle(String Title) {
        this.Title = Title;
    }

    /**
     * @return String return the Author
     */
    public String getAuthor() {
        return Author;
    }

    /**
     * @param Author the Author to set
     */
    public void setAuthor(String Author) {
        this.Author = Author;
    }

    /**
     * @return String return the Edition
     */
    public String getEdition() {
        return Edition;
    }

    /**
     * @param Edition the Edition to set
     */
    public void setEdition(String Edition) {
        this.Edition = Edition;
    }

    /**
     * @return int return the Rating
     */
    public int getRating() {
        return Rating;
    }

    /**
     * @param Rating the Rating to set
     */
    public void setRating(int Rating) {
        this.Rating = Rating;
    }

    /**
     * @return int return the Status
     */
    public int getStatus() {
        return Status;
    }

    /**
     * @param Status the Status to set
     */
    public void setStatus(int Status) {
        this.Status = Status;
    }

    /**
     * @return Date return the ReadAt
     */
    public Date getReadAt() {
        return ReadAt;
    }

    /**
     * @param ReadAt the ReadAt to set
     */
    public void setReadAt(Date ReadAt) {
        this.ReadAt = ReadAt;
    }

    /**
     * @return String return the Comment
     */
    public String getComment() {
        return Comment;
    }

    /**
     * @param Comment the Comment to set
     */
    public void setComment(String Comment) {
        this.Comment = Comment;
    }

    /**
     * @return String return the Color
     */
    public String getColor() {
        return Color;
    }

    /**
     * @param Color the Color to set
     */
    public void setColor(String Color) {
        this.Color = Color;
    }

    /**
     * @return int return the UserId
     */
    public int getUserId() {
        return UserId;
    }

    /**
     * @param UserId the UserId to set
     */
    public void setUserId(int UserId) {
        this.UserId = UserId;
    }


    /**
     * @return int return the BookId
     */
    public int getBookId() {
        return BookId;
    }

    /**
     * @param BookId the BookId to set
     */
    public void setBookId(int BookId) {
        this.BookId = BookId;
    }

}
