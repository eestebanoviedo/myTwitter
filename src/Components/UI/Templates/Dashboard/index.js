import * as React from "react"

import { Grid } from "@mui/material"

const DashboardTemplate = () => {
  return (
    <div style={{ height: "100rem" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item sm={3}>
          Aside
        </Grid>
        <Grid item sm={6}>
          Center
        </Grid>
        <Grid item sm={3}>
          Noticias
        </Grid>
      </Grid>
    </div>
  )
}

export default DashboardTemplate
