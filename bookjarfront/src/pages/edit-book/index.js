import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./edit-book.css";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Rating from "@mui/material/Rating";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const EditBook = () => {
  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [edition, setEdition] = useState("");
  const [color, setColor] = useState("");
  const [progress, setProgress] = useState("");
  const [comment, setComment] = useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleRating = (event) => {
    setRating(event.target.value);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleEdition = (event) => {
    setEdition(event.target.value);
  };

  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const handleProgress = (event) => {
    setProgress(event.target.value);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const submit = () => {
    if (title === "" || author === "") {
      if (title === "" && author === "") {
        setMessage("Os campos título e autor são obrigatórios");
      } else if (title === "") {
        setMessage("O campo título é obrigatório");
      } else if (author === "") {
        setMessage("O campo autor é obrigatório");
      }
      setOpen(true);
    }
    console.log(title, author, edition, color, progress, rating, comment);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      <div className="register-book-container app-margin-top">
        <div className="register-book-container-block">
          <p className="text-quick-regular-dark-big">Edite seu livro</p>

          <p className="text-quick-standart-dark-small"> Mude a cor da capa</p>

          <FormControl component="fieldset">
            <RadioGroup
              aria-label="color"
              defaultValue="blue"
              name="radio-buttons-group"
              onChange={handleColor}
              value={color}
            >
              <FormControlLabel control={<Radio />} value="blue" label="Azul" />
              <FormControlLabel
                control={<Radio />}
                value="red"
                label="Vermelho"
              />
              <FormControlLabel
                control={<Radio />}
                value="orange"
                label="Laranja"
              />
              <FormControlLabel
                control={<Radio />}
                value="yellow"
                label="Amarelo"
              />
              <FormControlLabel
                control={<Radio />}
                value="green"
                label="Verde"
              />
              <FormControlLabel
                control={<Radio />}
                value="purple"
                label="Roxo"
              />
            </RadioGroup>
          </FormControl>

          <p className="text-quick-standart-dark-small">
            {" "}
            Como está o seu progresso de leitura?
          </p>

          <FormControl component="fieldset">
            <RadioGroup
              aria-label="progress"
              defaultValue="inProgress"
              name="radio-buttons-group"
              value={progress}
              onChange={handleProgress}
            >
              <FormControlLabel
                value="notRead"
                control={<Radio />}
                label="Não começei o livro ainda"
              />
              <FormControlLabel
                value="inProgress"
                control={<Radio />}
                label="Estou lendo"
              />
              <FormControlLabel
                value="finished"
                control={<Radio />}
                label="Já acabei o livro"
              />
              <FormControlLabel
                value="giveUp"
                control={<Radio />}
                label="Desisti da leitura"
              />
            </RadioGroup>
          </FormControl>
          <div>
            <p className="text-quick-standart-dark-small">
              {" "}
              Dê uma nota para esse livro
            </p>
            <Rating
              value={rating}
              onChange={handleRating}
              name="size-large"
              size="large"
            />
          </div>
          <div className="input-container">
            <p className="text-quick-standart-dark-small">
              {" "}
              Dê uma opinião sobre o livro
            </p>
            <TextField
              className="font"
              id="outlined-multiline-flexible"
              label=""
              multiline
              fullWidth
              maxRows={20}
              value={comment}
              onChange={handleComment}
            />
          </div>
          <br />
          <div>
            <Button onClick={submit} fullWidth variant="contained">
              Salvar livro
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};