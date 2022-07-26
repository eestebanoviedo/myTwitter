import React, { useState } from "react"

import { Button, Typography } from "@mui/material"

// import Login from "./Components/Login"
// import PasswordReseted from "./Components/PasswordReseted"
// import ForgetPassword from "./Components/ForgetPassword"
// import useStyles from "./styles"

const OrganismLogin = () => {
  //   const [mostrar, setMostrar] = useState(1)
  //   const classes = useStyles()

  //   const form = <Login onClick={() => setMostrar(2)} />
  //   const removePass = (
  //     <ForgetPassword
  //       onClick={() => setMostrar(3)}
  //       onClickVolver={() => setMostrar(1)}
  //       onSubmit={() => {
  //         setMostrar(3)
  //       }}
  //     />
  //   )
  //   const formBack = <PasswordReseted onClick={() => setMostrar(1)} />

  return (
    <div>
      <div
      //   className={classes.paper}
      >
        {/* <img
          src={process.env.PUBLIC_URL + "./Images/loginTw.png"}
          alt="#"
          //   className={classes.logo}
        /> */}
        <Typography
          variant="h1"
          color="textSecondary"
          align="center"
          style={{ margin: 30 }}
        >
          Lo que está pasando ahora
        </Typography>
        <Typography
          variant="h2"
          color="textSecondary"
          align="center"
          style={{ margin: 30 }}
        >
          Únete a Twitter hoy mismo.
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ margin: 30 }}
        >
          {
            "Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies."
          }
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ margin: 30 }}
        >
          ¿Ya tienes una cuenta?
        </Typography>
        <Button></Button>
      </div>
    </div>
  )
}
export default OrganismLogin
