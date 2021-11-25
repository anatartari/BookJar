import React from "react";
import "./book.css";
import Star from "../../assets/icons/star.svg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function readingProgress(status) {
  if (status === "inProgress") {
    return "Leitura em progresso";
  } else if (status === "notRead") {
    return "Não foi lido ainda";
  } else if (status === "giveUp") {
    return "Desistiu da leitura";
  } else if (status === "finished") {
    return "Leitura finalizada";
  }
}

function displayEdition(number) {
  return number + "° edição";
}

export const Book = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div id="cover" className={"cover-container " + props.book.color}>
        <div className="cover-flex-container">
          <p className="text-asap-regular-big">{props.book.title}</p>
        </div>

        <div className="frame">
          <div className="cover-block">
            <p className="text-asap-regular-medium cover-itens">
              {readingProgress(props.book.progress)}
            </p>

            {props.book.comment ? (
              <button
                onClick={handleOpen}
                className="text-asap-regular-small comment-btn"
              >
                Ler comentário
              </button>
            ) : (
              <></>
            )}
            {props.book.rating ? (
              <div className="rating-flex-container">
                <p className="text-asap-regular-small cover-itens">
                  {props.book.rating}
                </p>
                <img className="star" src={Star} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="cover-flex-container footer-cover">
          <div className="cover-block">
            {props.book.edition ? (
              <div className="cover-flex-container">
                <p className="text-asap-regular-small cover-itens">
                  {displayEdition(props.book.edition)}
                </p>
              </div>
            ) : (
              <></>
            )}
            <p className="text-asap-regular-big-bold cover-itens">
              {props.book.author}
            </p>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Opinião de @biazinha
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.book.comment}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
