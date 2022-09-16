import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
  },
  logo: {
    height: "17rem",
    width: "17rem",
  },
  logoGoogle: {
    height: "2rem",
    marginRight: "2rem",
    minWidth: "2rem",
    width: "2rem",
  },
  button: {
    width: "100%",
    maxWidth: 300,
  },
}))

export default useStyles
