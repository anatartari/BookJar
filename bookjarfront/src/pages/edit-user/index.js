import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./edit-user.css";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const EditUser = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [insta, setInsta] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [fullMessage, setFullMessage] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleFullname = (event) => {
    setFullname(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleBirthdate = (event) => {
    setBirthDate(event.target.value);
  };

  const handleInsta = (event) => {
    setInsta(event.target.value);
  };

  const handleTiktok = (event) => {
    setTiktok(event.target.value);
  };

  const handleBio = (event) => {
    setBio(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const submit = () => {
    if (
      fullname === "" ||
      email === "" ||
      birthdate === "" ||
      bio === "" ||
      password === ""
    ) {
      setOpen(true);
    }
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Um ou mais campos obrigatórios estão incompletos - Todos os campos com
          * são obrigatórios
        </Alert>
      </Snackbar>
      <div className="register-book-container app-margin-top mobile-padding">
        <div className="register-book-container-block">
          <br />
          <br />
          <div className="one-border-frame">
            <p className="text-quick-regular-dark-big --less-margin ">
              Edite os dados do seu perfil
            </p>
            <p className="helper-text --less-margin">
              Altere os campos que deseja e clique em "Atualizar perfil"
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
              onChange={handleFullname}
            />
          </div>
          <div className="input-container">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              onChange={handleEmail}
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
              onChange={handleBirthdate}
              InputLabelProps={{ shrink: true }}
            />
          </div>
          <br />
          <p className="text-quick-standart-dark-small --less-margin">
            Redes sociais
          </p>
          <div className="subtitle-container">
            <p className="text-quick-standart-dark --less-margin">
              Mudou seu username? Não tem problema, você pode alterar ele aqui
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
              onChange={handleInsta}
            />
          </div>

          <div className="input-container">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="TikTok"
              variant="outlined"
              onChange={handleTiktok}
            />
          </div>
          <br />
          <p className="text-quick-standart-dark-small --less-margin">
            Mude sua apresentação
          </p>
          <div className="subtitle-container">
            <p className="text-quick-standart-dark --less-margin">
              Novos gostos literários? Atualize sua vida e preferências
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
              onChange={handleBio}
            />
          </div>
          <br />
          <p className="text-quick-standart-dark-small --password-margin">
            Alterar senha
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
              onChange={handlePassword}
            />
          </div>
          <br />
          <div>
            <Button onClick={submit} fullWidth variant="contained">
              Atualizar perfil
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
