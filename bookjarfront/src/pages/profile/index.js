import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Book } from "../../components/book";

import "./profile.css";
import { Grid } from "@mui/material";

export const Profile = () => {
  const matches = useMediaQuery("(min-width:600px)");

  const socialMedia = [
    {
      app: "Instagram",
      username: "@biazinha",
    },
    {
      app: "E-mail",
      username: "biazinha@email.com",
    },
    {
      app: "TikTok",
      username: "@biazinha",
    },
  ];

  const books = [
    {
      title: "O Alquimista",
      progress: "finished",
      year_finished: "2021",
      rating: "5",
      comment:
        "Os elementos SVG devem ser dimensionados para uma visualização de 24x24px, de modo que o ícone resultante possa ser usado como está, ou incluído como filho para outros componentes de Material-UI que usam ícones. (Isso pode ser customizado com o atributo viewBox).",
      edition: "5",
      author: "Paulo Coelho",
      color: "blue",
    },
    {
      title: "Millenium: Os homens que não amavam as mulheres",
      progress: "inProgress",
      edition: "9",
      author: "Stieg Larson",
      color: "red",
    },
    {
      title: "O código da Vinci",
      progress: "notRead",

      author: "Dan Brown",
      color: "green",
    },
    {
      title: "Orgulho e preconceito",
      progress: "giveUp",
      rating: "2",
      edition: "9",
      author: "Jane Austen",
      color: "purple",
    },
  ];

  return (
    <>
      {matches ? (
        <>
          <div className="flex-container">
            <div className="wrapper">
              <div className=" c">
                <div className="flex">
                  <h3 className="text-title-dark-bold">@biazinha</h3>
                  <div className="vl"></div>
                  <p className="text-title-dark ">245 livros</p>
                </div>
              </div>
              <div className="a --up--max">
                <p className="text-standart-italic-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  ultrices, erat vitae viverra mollis, nulla ligula aliquet
                  lectus.
                </p>
              </div>
              <div className=" b">
                <div className="block">
                  <p className="text-title-dark">Redes sociais</p>
                  {socialMedia.map((item, i) => (
                    <p key={i} className="text-standart-dark social-media">
                      <spam className="text-medium-italic-dark">
                        {item.app}
                      </spam>{" "}
                      -{item.username}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="margin-books">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              xs={12}
              md={12}
            >
              {books.map((book, i) => (
                <Grid item xs={12} md={6}>
                  {i % 2 !== 0 ? (
                    <Grid container justifyContent="flex-start">
                      <div className="book-margin--left">
                        <Book book={book}></Book>
                      </div>
                    </Grid>
                  ) : (
                    <Grid container justifyContent="flex-end">
                      <div className="book-margin--right">
                        <Book book={book}></Book>
                      </div>
                    </Grid>
                  )}
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      ) : (
        <>
          <div className="mobile-padding">
            <div className="flex--mobile">
              <p className="text-title-dark-bold">@biazinha</p>
              <div className="vl"></div>
              <p className="text-title-dark ">245 livros</p>
            </div>
            <p className="text-standart-italic-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ultrices, erat vitae viverra mollis, nulla ligula aliquet lectus.
            </p>

            <div className="frame--mobile">
              <div className="block--mobile">
                <p className="text-title-dark ">Redes sociais</p>
                {socialMedia.map((item, i) => (
                  <p key={i} className="text-standart-dark social-media">
                    <spam className="text-medium-italic-dark">{item.app}</spam>{" "}
                    -{item.username}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="mobile-padding  ">
            <br />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              xs={12}
              md={12}
            >
              {books.map((book, i) => (
                <Grid item xs={12} md={6}>
                  <div>
                    <Book book={book}></Book>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      )}
    </>
  );
};
