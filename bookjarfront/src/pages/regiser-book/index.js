import React from "react";
import { Grid, TextField } from "@mui/material";
import "./register-book.css";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const RegisterBook = () => {
  return (
    <>
      <div className="register-book-container app-margin-top">
        <div className="register-book-container-block">
          <p className="text-quick-regular-dark-big">Cadastre seu livro</p>
          <div className="input-container">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Título"
              variant="outlined"
            />
          </div>
          <div className="input-container">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Autor"
              variant="outlined"
            />
          </div>
          <div className="input-container">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Edição"
              variant="outlined"
            />
          </div>
          <p className="text-quick-standart-italic-dark ">
            {" "}
            Escolha a cor da capa
          </p>

          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Azul" />
            <FormControlLabel control={<Checkbox />} label="Vermelho" />
            <FormControlLabel control={<Checkbox />} label="Laranja" />
            <FormControlLabel control={<Checkbox />} label="Amarelo" />
            <FormControlLabel control={<Checkbox />} label="Verde" />
            <FormControlLabel control={<Checkbox />} label="Roxo" />
          </FormGroup>

          <p className="text-quick-standart-italic-dark ">
            {" "}
            Como está o seu progresso de leitura?
          </p>

          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Não começei o livro ainda"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Estou lendo"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Já acabei o livro"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Desisti da leitura"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </>
  );
};
