import React, { useState, useEffect } from "react";
import { Book } from "../../components/book";
import api from "../../services/api";
import "./visualize-book.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const VisualizeBook = () => {
  const [book, setbook] = useState("");
  let { bookId } = useParams();

  useEffect(() => {
    api.get(`/Book/GetDetails/${bookId}`).then((res) => {
      console.log(res.data);
      setbook(res.data);
    });
  }, []);

  return (
    <>
      {book !== undefined && book.user !== undefined ? (
        <div className="mobile-padding">
          <div className="email-container ">
            <Link className="link" to={`/profile/${book.user.id}`}>
              <p className="text-standart-italic-dark ">{book.user.email}</p>
            </Link>
          </div>
          <div className="visualize-book-container ">
            <Book email={book.user.email} book={book}></Book>
          </div>
        </div>
      ) : (
        <>
          <p>loading</p>
        </>
      )}
    </>
  );
};
