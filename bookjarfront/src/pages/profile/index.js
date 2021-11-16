import React, { useState } from "react";
import NavBar from "../../components/navbar";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import "./profile.css";

export const Profile = () => {
  return (
    <>
      {/* <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        columns={{ xs: 6, md: 12 }}
        spacing={1}
      >
        <Grid item xs={12} md={4}>
          <Grid container direction="row" alignItems="center" justifyContent="">
            <Grid justifyItems>
              <h3>@biazinha</h3>
            </Grid>

            <Grid item>
              <div className="vl"></div>
            </Grid>

            <Grid item>
              <p>245 livros</p>
            </Grid>
            <Grid item xs={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ultrices, erat vitae viverra mollis, nulla ligula aliquet lectus.
            </Grid>
          </Grid>
        </Grid>

        <div className="vl--big"></div>

        <Grid item xs={12} md={4}>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <p>Redes sociais</p>
          </Grid>
        </Grid>
      </Grid> */}
      <div className="flex-container">
        <div className="wrapper">
          <div className=" c">
            <h3 className="text-title-dark-bold">@biazinha</h3>
          </div>
          <div className="d">
            <div className="vl"></div>
          </div>
          <div className=" e">
            <p className="text-title-dark ">245 livros</p>
          </div>
          <div className=" a">
            <p className="text-standart-italic-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ultrices, erat vitae viverra mollis, nulla ligula aliquet lectus.
            </p>
          </div>
          <div className=" b">
            <p className="text-title-dark">Redes sociais</p>
          </div>
        </div>
      </div>
    </>
  );
};
