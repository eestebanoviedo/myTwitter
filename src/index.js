import React from "react"
import ReactDOM from "react-dom/client"

import App from "Components/App"

import { StrictMode } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import useGlobalStyles from "styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#3E984C",
      light: "#3D996050",
    },
    secondary: {
      main: "#019966",
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderColor: "grey",
        },
      },
    },
  },
})

function MyThemeProvider({ children }) {
  useGlobalStyles()

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(
  <StrictMode>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </StrictMode>
)
