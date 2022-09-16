import { makeStyles } from "@mui/styles"

const useGlobalStyles = makeStyles(() => ({
  "@global": {
    html: {
      fontSize: "62.5%",
    },
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
    },
  },
}))

export default useGlobalStyles
