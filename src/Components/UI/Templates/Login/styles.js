import { makeStyles } from "@mui/material"

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "../Images/loginTw.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    width: "100%",
  },
}))

export default useStyles
