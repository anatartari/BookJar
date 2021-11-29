import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./login.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const submit = () => {
    if (email === "" || password === "") {
      if (email === "" && password === "") {
        setMessage("Os campos E-mail e Senha são obrigatórios");
      } else if (email === "") {
        setMessage("O campo E-mail é obrigatório");
      } else if (password === "") {
        setMessage("O campo Senha é obrigatório");
      }
      setOpen(true);
    }
  };

  //todo: link no cadastre-se
  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      <div className="register-book-container app-margin-top">
        <div className="register-book-container-block">
          <br />
          <br />
          <div className="one-border-frame">
            <p className="text-quick-regular-dark-big --less-margin ">
              Entre na sua conta
            </p>
            <p className="text-quick-standart-gray-small --less-margin">
              Insira seu username e senha para entrar na sua bibioteca
            </p>
          </div>

          <br />
          <br />

          <div className="input-container">
            <TextField
              onChange={handleEmail}
              fullWidth
              size="small"
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
            />
          </div>
          <div className="input-container">
            <TextField
              onChange={handlePassword}
              fullWidth
              size="small"
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              type="password"
            />
          </div>
          <p className="helper-text">
            Não tem uma conta no BookJar?{" "}
            <span className="helper-text--link">Cadastre-se</span>
          </p>
          <br />
          <div>
            <Button onClick={submit} fullWidth variant="contained">
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
