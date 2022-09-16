import React from "react"
import ReactDOM from "react-dom/client"

import App from "Components/App"

import { StrictMode } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import useGlobalStyles from "styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      light: "#3D996050",
    },
    secondary: {
      main: "#00acee",
    },
    custom: {
      light: "#ffa726",
      main: "black",
      dark: "white",
      contrastText: "rgba(0, 0, 0, 0.87)",
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
