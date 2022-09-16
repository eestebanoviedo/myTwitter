import * as React from "react"

import { Button, Typography, Grid, Link } from "@mui/material"

import { styled } from "@mui/system"

import useStyles from "./styles"

const OrganismLogin = () => {
  const classes = useStyles()

  const MyStyledButton = styled(Button)(() => ({
    borderRadius: "60rem",
  }))

  return (
    <div className={classes.paper}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={12} md={12}>
          <img
            src={process.env.PUBLIC_URL + "./Images/logoBird.png"}
            alt="#"
            className={classes.logo}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            variant="h1"
            color="textSecondary"
            align="center"
            style={{ margin: 0, color: "white", textAlign: "start" }}
          >
            Lo que está pasando ahora
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            variant="h2"
            color="textSecondary"
            align="center"
            style={{ margin: 0, color: "white", textAlign: "start" }}
          >
            Únete a Twitter hoy mismo.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            variant="h2"
            color="textSecondary"
            align="center"
            style={{ margin: 30, color: "white" }}
          ></Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <MyStyledButton
            variant="contained"
            color="primary"
            style={{
              width: "30rem",
              maxWidth: "40rem",
              minWidth: "minContent",
            }}
            startIcon={
              <img
                src={process.env.PUBLIC_URL + "./Images/logoGoogle.png"}
                alt="#"
                className={classes.logoGoogle}
              />
            }
          >
            Registarse con Google
          </MyStyledButton>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <MyStyledButton
            variant="contained"
            color="primary"
            style={{
              width: "30rem",
              maxWidth: "40rem",
              minWidth: "minContent",
            }}
            startIcon={
              <img
                src={process.env.PUBLIC_URL + "./Images/logoApple.png"}
                alt="#"
                className={classes.logoGoogle}
              />
            }
          >
            Registarse con Apple
          </MyStyledButton>
        </Grid>
        {/* <hr /> */}
        <Grid item xs={12} sm={12} md={12}>
          <MyStyledButton
            variant="outlined"
            className={classes.button}
            style={{
              width: "100%",
              maxWidth: 300,
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textAlign: "left",
              display: "block",
            }}
          >
            Regístrate con el número de teléfono o correo electrónico
          </MyStyledButton>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            variant="body2"
            color="textSecondary"
            align="left"
            style={{
              color: "white",
              maxWidth: "50rem",
              width: "47rem",
              overflowWrap: "break-word",
            }}
          >
            Al registrarte, aceptas los{" "}
            <Link component="button" variant="body2">
              Términos de servicio
            </Link>{" "}
            y la{" "}
            <Link component="button" variant="body2">
              Política de privacidad
            </Link>
            , incluida la política de{" "}
            <Link component="button" variant="body2">
              {" "}
              Uso de Cookies
            </Link>
            .
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            variant="h5"
            color="textSecondary"
            align="left"
            style={{ color: "white" }}
          >
            ¿Ya tienes una cuenta?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <MyStyledButton
            variant="contained"
            color="custom"
            style={{
              color: "#00acee",
              border: "2px solid",
              width: "30rem",
              maxWidth: "40rem",
              minWidth: "minContent",
            }}
            size="large"
          >
            Iniciar sesión
          </MyStyledButton>
        </Grid>
      </Grid>
    </div>
  )
}
export default OrganismLogin
