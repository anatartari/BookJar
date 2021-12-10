import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Book } from "../../components/book";
import api from "../../services/api";
import "./profile.css";
import { Grid } from "@mui/material";
import { useParams } from "react-router";

function generateUsername(email) {
  var splitEmail = email.split("@");
  return splitEmail[0];
}

function refreshPage() {
  window.location.reload(true);
}

export const Profile = () => {
  const [user, setUser] = useState(null);
  const logedUserId = localStorage.getItem("@bookjar/userId");
  const [refresh, setRefresh] = useState(false);
  let { userId } = useParams();

  const checkUser = () => {
    if (userId === logedUserId) return true;
    else return false;
  };

  useEffect(() => {
    console.log(userId);
    api
      .get(`/User/getById/${userId}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
        if (!refresh) {
          // refreshPage();
          setRefresh(true);
        }
      })
      .catch((err) => {
        console.log("Ocorreu um erro" + err);
      });
  }, []);

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      {user === undefined || user === null ? (
        <>
          <p>loading</p>
        </>
      ) : (
        <>
          {matches ? (
            <>
              <div className="flex-container">
                <div className="wrapper">
                  <div className=" c">
                    <div className="flex">
                      <h3 className="text-title-dark-bold">
                        @{generateUsername(user.email)}
                      </h3>
                      <div className="vl"></div>
                      <p className="text-title-dark ">
                        {user.booksList.length} livros
                      </p>
                    </div>
                  </div>
                  <div className="a --up--max">
                    <p className="text-standart-italic-dark">
                      {user.description}
                    </p>
                  </div>
                  <div className=" b">
                    <div className="block">
                      <p className="text-title-dark">Redes sociais</p>
                      <p className="text-standart-dark social-media">
                        <span className="text-medium-italic-dark">
                          E-mail -{" "}
                        </span>{" "}
                        {user.email}
                      </p>
                      <p className="text-standart-dark social-media">
                        <span className="text-medium-italic-dark">
                          Instagram -
                        </span>{" "}
                        {user.instagram}
                      </p>
                      <p className="text-standart-dark social-media">
                        <span className="text-medium-italic-dark">
                          TikTok -{" "}
                        </span>{" "}
                        {user.tiktok}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              {user.booksList.length === 0 ? (
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  xs={12}
                  md={12}
                >
                  <br />
                  <br />
                  <br />
                  <br />
                  <div>
                    <p className="text-title-dark">
                      Nenhum livro cadastrado ainda
                    </p>
                  </div>
                </Grid>
              ) : (
                <div className="margin-books">
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                    md={12}
                  >
                    {user.booksList.map((book, i) => (
                      <Grid item xs={12} md={6}>
                        {i % 2 !== 0 ? (
                          <Grid container justifyContent="flex-start">
                            <div className="book-margin--left">
                              <Book
                                edit={checkUser}
                                email={user.email}
                                book={book}
                              ></Book>
                            </div>
                          </Grid>
                        ) : (
                          <Grid container justifyContent="flex-end">
                            <div className="book-margin--right">
                              <Book
                                edit={checkUser}
                                email={user.email}
                                book={book}
                              ></Book>
                            </div>
                          </Grid>
                        )}
                      </Grid>
                    ))}
                  </Grid>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="mobile-padding">
                <div className="flex--mobile">
                  <p className="text-title-dark-bold">
                    {" "}
                    @{generateUsername(user.email)}
                  </p>
                  <div className="vl"></div>
                  <p className="text-title-dark ">
                    {user.booksList.length} livros
                  </p>
                </div>
                <p className="text-standart-italic-dark">{user.description}</p>

                <div className="frame--mobile">
                  <div className="block--mobile">
                    <p className="text-title-dark ">Redes sociais</p>
                    <p className="text-standart-dark social-media">
                      <span className="text-medium-italic-dark">E-mail - </span>{" "}
                      {user.email}
                    </p>
                    <p className="text-standart-dark social-media">
                      <span className="text-medium-italic-dark">
                        Instagram -
                      </span>{" "}
                      {user.instagram}
                    </p>
                    <p className="text-standart-dark social-media">
                      <span className="text-medium-italic-dark">TikTok - </span>{" "}
                      {user.tiktok}
                    </p>
                  </div>
                </div>
              </div>
              {user.booksList.length === 0 ? (
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  xs={12}
                  md={12}
                >
                  <br />
                  <br />

                  <div>
                    <p className="text-title-dark">
                      Nenhum livro cadastrado ainda
                    </p>
                  </div>
                </Grid>
              ) : (
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
                    {user.booksList.map((book, i) => (
                      <Grid item xs={12} md={6}>
                        <div>
                          <Book
                            edit={checkUser}
                            email={user.email}
                            book={book}
                          ></Book>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
