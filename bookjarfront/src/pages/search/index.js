import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./search.css";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

export const Search = () => {
  let navigate = useNavigate();

  const [prefix, setPrefix] = useState("");
  const [books, setBooks] = useState([]);

  const handlePrefix = (event) => {
    setPrefix(event.target.value);
  };

  const submitSearch = () => {
    api.get(`/Book/GetByTitle/${prefix}`).then((res) => {
      setBooks(res.data);
      console.log(res.data);
    });
  };

  return (
    <>
      <div className="search-container app-margin-top mobile-padding">
        <div className="flex-search">
          <TextField
            fullWidth
            id="outlined-basic"
            placeholder="Pesquise um livro ou usuário "
            variant="outlined"
            onChange={handlePrefix}
          />

          <div>
            <Button
              onClick={submitSearch}
              className="search-btn"
              variant="contained"
            >
              Pesquisar
            </Button>
          </div>
        </div>
        <br />
        <div>
          {books.length !== 0 ? (
            <List>
              {books.map((book) => (
                <>
                  <Link className="link" to={`/visualize-book/${book.bookId}`}>
                    <ListItem>
                      <ListItemText
                        primary={book.title}
                        secondary={book.user.email}
                      />
                    </ListItem>
                  </Link>
                  <Divider />
                </>
              ))}
            </List>
          ) : (
            <List>
              <ListItem>
                <ListItemText primary="Nenhum resultado encontrado" />
              </ListItem>
            </List>
          )}
        </div>
      </div>
    </>
  );
};
