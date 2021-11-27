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

@Entity
@Table(name="Books")
public class Book {
    
    public Book(){}

    public Book(int id, String title, String author, String edition, int rating, int status, Date readAt,
            String comment, String color, bookjar.bookjarApi.models.User user) {
        Id = id;
        Title = title;
        Author = author;
        Edition = edition;
        Rating = rating;
        Status = status;
        ReadAt = readAt;
        Comment = comment;
        Color = color;
        User = user;
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int Id;

    @Column(length = 150)
    private String Title;

    @Column(length = 80)
    private String Author;

    private String Edition;

    private int Rating;

    private int Status;

    private Date ReadAt;

    @Column(length = 300)
    private String Comment;

    private String Color;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "UserId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIdentityReference(alwaysAsId = true)
    @JsonIgnoreProperties
    private User User;

    /**
     * @return int return the Id
     */
    public int getId() {
        return Id;
    }

    /**
     * @param Id the Id to set
     */
    public void setId(int Id) {
        this.Id = Id;
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
     * @return User return the User
     */
    public User getUser() {
        return User;
    }

    /**
     * @param User the User to set
     */
    public void setUser(User User) {
        this.User = User;
    }

}
