import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  logo: {
    height: "198.6px",
    width: "220.1px",
  },
  logoGoogle: {
    height: "18px",
    marginRight: "8px",
    minWidth: "18px",
    width: "18px",
  },
  button: {
    width: "100%",
    maxWidth: 300,
  },
}))

export default useStyles
