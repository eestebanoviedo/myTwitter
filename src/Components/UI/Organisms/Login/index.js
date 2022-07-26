import * as React from "react"

import { Button, Typography, Box } from "@mui/material"
import { withStyles } from "@mui/styles"

import { styled } from "@mui/system"

import useStyles from "./styles"

const OrganismLogin = () => {
  const classes = useStyles()

  const MyStyledButton = styled(Button)((props) => ({
    borderRadius: "60px",
  }))

  return (
    <div className={classes.paper}>
      <img
        src={process.env.PUBLIC_URL + "./Images/logoBird.png"}
        alt="#"
        className={classes.logo}
      />

      <Typography
        variant="h1"
        color="textSecondary"
        align="center"
        style={{ margin: 30, color: "white", textAlign: "start" }}
      >
        Lo que está pasando ahora
      </Typography>
      <Typography
        variant="h2"
        color="textSecondary"
        align="center"
        style={{ margin: 30, color: "white" }}
      ></Typography>

      <MyStyledButton
        variant="contained"
        color="primary"
        style={{ width: "300px", maxWidth: "400px", minWidth: "minContent" }}
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

      <MyStyledButton
        variant="contained"
        color="primary"
        style={{ width: "300px", maxWidth: "400px", minWidth: "minContent" }}
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
      {/* <hr /> */}
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

      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        style={{ margin: 30, color: "white" }}
      >
        {
          "Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies."
        }
      </Typography>
      <Typography
        variant="h5"
        color="textSecondary"
        align="center"
        style={{ margin: 30, color: "white" }}
      >
        ¿Ya tienes una cuenta?
      </Typography>
      <MyStyledButton
        variant="contained"
        color="custom"
        style={{ color: "#00acee" }}
      >
        Iniciar sesión
      </MyStyledButton>
    </div>
  )
}
export default OrganismLogin
