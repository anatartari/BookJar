package bookjar.bookjarApi.Models;

import java.util.*;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name="Users")
public class User {

    public User() {
    }

    public User(int id, String email, String fullName, String password, Date birthday, String instagram, String twitter,
            String tiktok, String description, ArrayList<Book> booksList) {
        Id = id;
        Email = email;
        FullName = fullName;
        Password = password;
        Birthday = birthday;
        Instagram = instagram;
        Twitter = twitter;
        Tiktok = tiktok;
        Description = description;
        this.booksList = booksList;
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int Id;    

    @Column(nullable = false, unique = true)
    private String Email;
    
    @Column(nullable = false)
    private String FullName;

    @Column(nullable = false)
    private String Password;

    private Date Birthday;

    private String Instagram;

    private String Twitter;

    private String Tiktok;

    @Column(length = 300)
    private String Description;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "book", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Book> booksList;


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
     * @return String return the Email
     */
    public String getEmail() {
        return Email;
    }

    /**
     * @param Email the Email to set
     */
    public void setEmail(String Email) {
        this.Email = Email;
    }

    /**
     * @return String return the Password
     */
    public String getPassword() {
        return Password;
    }

    /**
     * @param Password the Password to set
     */
    public void setPassword(String Password) {
        this.Password = Password;
    }


    /**
     * @return String return the FullName
     */
    public String getFullName() {
        return FullName;
    }

    /**
     * @param FullName the FullName to set
     */
    public void setFullName(String FullName) {
        this.FullName = FullName;
    }

    /**
     * @return Date return the Birthday
     */
    public Date getBirthday() {
        return Birthday;
    }

    /**
     * @param Birthday the Birthday to set
     */
    public void setBirthday(Date Birthday) {
        this.Birthday = Birthday;
    }

    /**
     * @return String return the Instagram
     */
    public String getInstagram() {
        return Instagram;
    }

    /**
     * @param Instagram the Instagram to set
     */
    public void setInstagram(String Instagram) {
        this.Instagram = Instagram;
    }

    /**
     * @return String return the Twitter
     */
    public String getTwitter() {
        return Twitter;
    }

    /**
     * @param Twitter the Twitter to set
     */
    public void setTwitter(String Twitter) {
        this.Twitter = Twitter;
    }

    /**
     * @return String return the Tiktok
     */
    public String getTiktok() {
        return Tiktok;
    }

    /**
     * @param Tiktok the Tiktok to set
     */
    public void setTiktok(String Tiktok) {
        this.Tiktok = Tiktok;
    }

    /**
     * @return String return the Description
     */
    public String getDescription() {
        return Description;
    }

    /**
     * @param Description the Description to set
     */
    public void setDescription(String Description) {
        this.Description = Description;
    }


    /**
     * @return ArrayList<Book> return the booksList
     */
    public ArrayList<Book> getBooksList() {
        return booksList;
    }

    /**
     * @param booksList the booksList to set
     */
    public void setBooksList(ArrayList<Book> booksList) {
        this.booksList = booksList;
    }

}