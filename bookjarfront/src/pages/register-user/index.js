import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import "./register-user.css";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const RegisterUser = () => {
  let navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [insta, setInsta] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = useState(false);
  const [user, setUser] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  const handleFullname = (event) => {
    setFullname(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
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

  const login = () => {
    api
      .post("/User/Login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("@bookjar/userId", response.data.id);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
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
    } else {
      api
        .post("/User/Register", {
          email: email,
          fullName: fullname,
          password: password,
          birthday: birthdate,
          instagram: insta,
          tiktok: tiktok,
          description: bio,
        })
        .then((response) => {
          login();
          console.log(response);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
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
      <Snackbar open={openError} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          Um erro ocorreu, revise suas informações e tente novamente
        </Alert>
      </Snackbar>
      <div className="register-book-container app-margin-top mobile-padding">
        <div className="register-book-container-block">
          <br />
          <br />
          <div className="one-border-frame">
            <p className="text-quick-regular-dark-big --less-margin ">
              Cadastre-se
            </p>
            <Link className="link" to="/login">
              <p className="helper-text --less-margin">
                Já possui uma conta?{" "}
                <span className="helper-text--link">Faça login</span>
              </p>
            </Link>
          </div>
          <br />

          <p className="text-quick-standart-dark-small">Dados pessoais</p>
          <div className="input-container">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Nome completo *"
              variant="outlined"
              onChange={handleFullname}
            />
          </div>
          <div className="input-container">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="E-mail *"
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
              label="Data de nascimento *"
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
            Apresente-se *
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
              onChange={handleBio}
            />
          </div>
          <br />
          <p className="text-quick-standart-dark-small --password-margin">
            Cadastre sua senha *
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
              Cadastrar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
