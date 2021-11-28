import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./search.css";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export const Search = () => {
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
      user: "biazinha@email.com",
    },
    {
      title: "Millenium: Os homens que não amavam as mulheres",
      progress: "inProgress",
      edition: "9",
      author: "Stieg Larson",
      color: "red",
      user: "aninha@email.com",
    },
    {
      title: "O código da Vinci",
      progress: "notRead",
      author: "Dan Brown",
      color: "green",
      user: "biazinha@email.com",
    },
    {
      title: "Orgulho e preconceito",
      progress: "giveUp",
      rating: "2",
      edition: "9",
      author: "Jane Austen",
      color: "purple",
      user: "biazinha@email.com",
    },
  ];

  return (
    <>
      <div className="search-container app-margin-top mobile-padding">
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="Pesquise um livro ou usuário "
          variant="outlined"
        />
        <br />
        <br />
        <div className="radio-container ">
          <div>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="search-options"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="book"
                  control={<Radio />}
                  label="Livro"
                />
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="Usuário"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <Button variant="contained">Pesquisar</Button>
          </div>
        </div>
        <br />
        <div>
          <List>
            {books.map((book) => (
              <>
                <ListItem>
                  <ListItemText primary={book.title} secondary={book.user} />
                </ListItem>
                <Divider />
              </>
            ))}
            <ListItem>
              <ListItemText primary="Nenhum resultado encontrado" />
            </ListItem>
          </List>
        </div>
      </div>
    </>
  );
};
