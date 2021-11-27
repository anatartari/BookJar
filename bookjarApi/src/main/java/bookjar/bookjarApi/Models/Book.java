package bookjar.bookjarApi.models;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import bookjar.bookjarApi.dtos.BookDTO;

@Entity
@Table(name="Books")
public class Book {
    
    public Book(){}

    public Book(int id, String title, String author, String edition, int rating, int status, Date readAt,
            String comment, String color, bookjar.bookjarApi.models.User user) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.edition = edition;
        this.rating = rating;
        this.status = status;
        this.readAt = readAt;
        this.comment = comment;
        this.color = color;
        this.user = user;
    }

    public Book(BookDTO bookDto){
        this.id = bookDto.getBookId();
        this.title = bookDto.getTitle();
        this.author = bookDto.getAuthor();
        this.edition = bookDto.getEdition();
        this.rating = bookDto.getRating();
        this.status = bookDto.getStatus();
        this.readAt = bookDto.getReadAt();
        this.comment = bookDto.getComment();
        this.color = bookDto.getColor();
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    @Column(length = 150)
    private String title;

    @Column(length = 80)
    private String author;

    private String edition;

    private int rating;

    private int status;

    private Date readAt;

    @Column(length = 300)
    private String comment;

    private String color;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "UserId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIdentityReference(alwaysAsId = true)
    @JsonIgnoreProperties
    private User user;



    /**
     * @return int return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @param author the author to set
     */
    public void setAuthor(String author) {
        this.author = author;
    }

    /**
     * @param edition the edition to set
     */
    public void setEdition(String edition) {
        this.edition = edition;
    }

    /**
     * @param rating the rating to set
     */
    public void setRating(int rating) {
        this.rating = rating;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(int status) {
        this.status = status;
    }

    /**
     * @param readAt the readAt to set
     */
    public void setReadAt(Date readAt) {
        this.readAt = readAt;
    }

    /**
     * @param comment the comment to set
     */
    public void setComment(String comment) {
        this.comment = comment;
    }

    /**
     * @param color the color to set
     */
    public void setColor(String color) {
        this.color = color;
    }

    /**
     * @return User return the user
     */
    public User getUser() {
        return user;
    }

    /**
     * @param user the user to set
     */
    public void setUser(User user) {
        this.user = user;
    }

}
