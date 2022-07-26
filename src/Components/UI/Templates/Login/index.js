import * as React from "react"

import { Grid, Hidden } from "@mui/material"
import OrganismLogin from "Components/UI/Organisms/Login"

const LoginTemplate = () => {
  return (
    <Grid container style={{ height: "100vh" }}>
      <Hidden xsDown>
        <Grid
          item
          xs={false}
          sm={6}
          md={6}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "../Images/loginTw.png"
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
        />
      </Hidden>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        xs={12}
        sm={6}
        md={6}
        elevation={6}
      >
        <OrganismLogin />
      </Grid>
    </Grid>
  )
}

export default LoginTemplate
