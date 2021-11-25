import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./register-user.css";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const RegisterUser = () => {
  //todo: hooks e snackbar
  const submit = () => {};

  return (
    <>
      <div className="register-book-container app-margin-top">
        <div className="register-book-container-block">
          <br />
          <br />
          <div className="one-border-frame">
            <p className="text-quick-regular-dark-big --less-margin ">
              Cadastre-se
            </p>
            <p className="helper-text --less-margin">
              Já possui uma conta?{" "}
              <span className="helper-text--link">Faça login</span>
            </p>
          </div>
          <br />

          <p className="text-quick-standart-dark-small">Dados pessoais</p>
          <div className="input-container">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Nome completo"
              variant="outlined"
              //   onChange={handleTitle}
            />
          </div>
          <div className="input-container">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              //   onChange={handleAuthor}
            />
          </div>
          <div className="input-container">
            <TextField
              type="number"
              fullWidth
              size="small"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              //   onChange={handleEdition}
            />
          </div>
          <div className="input-container">
            <TextField
              type="date"
              fullWidth
              size="small"
              id="outlined-basic"
              label="Data de nascimento"
              variant="outlined"
              //   onChange={handleEdition}
              InputLabelProps={{ shrink: true }}
            />
          </div>
          <br />
          <p className="text-quick-standart-dark-small --less-margin">
            Redes sociais
          </p>
          <div className="subtitle-container">
            <p className="text-quick-standart-dark --less-margin">
              Deixe até duas redes sociais além do seu e-mail no perfil, para
              que outros leitores possam te conhecer
            </p>
          </div>
          <br />
          <div className="input-container">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Instagram"
              variant="outlined"
              //   onChange={handleEdition}
            />
          </div>

          <div className="input-container">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="TikTok"
              variant="outlined"
              //   onChange={handleEdition}
            />
          </div>
          <br />
          <p className="text-quick-standart-dark-small --less-margin">
            Apresente-se
          </p>
          <div className="subtitle-container">
            <p className="text-quick-standart-dark --less-margin">
              Escreva uma breve apresentação sobre si mesmo, seus gostos
              literários
            </p>
          </div>
          <br />
          <div className="input-container">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label=""
              variant="outlined"
              multiline
              //   onChange={handleEdition}
            />
          </div>
          <br />
          <p className="text-quick-standart-dark-small --password-margin">
            Cadastre sua senha
          </p>
          <div className="input-container">
            <TextField
              type="password"
              fullWidth
              size="small"
              id="outlined-basic"
              label=""
              variant="outlined"
              multiline
              //   onChange={handleEdition}
            />
          </div>
          <br />
          <div>
            <Button onClick={submit} fullWidth variant="contained">
              Cadastrar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
