import React, { useState } from "react";
import { Book } from "../../components/book";
import "./visualize-book.css";

export const VisualizeBook = () => {
  const book = {
    title: "O Alquimista",
    progress: "finished",
    year_finished: "2021",
    rating: "5",
    comment:
      "Os elementos SVG devem ser dimensionados para uma visualização de 24x24px, de modo que o ícone resultante possa ser usado como está, ou incluído como filho para outros componentes de Material-UI que usam ícones. (Isso pode ser customizado com o atributo viewBox).",
    edition: "5",
    author: "Paulo Coelho",
    color: "blue",
    user: "biazinha@email.com",
  };

  return (
    <>
      <div className="mobile-padding">
        <div className="email-container ">
          <p className="text-standart-italic-dark ">biazinha@email.com</p>
        </div>
        <div className="visualize-book-container ">
          <Book book={book}></Book>
        </div>
      </div>
    </>
  );
};
