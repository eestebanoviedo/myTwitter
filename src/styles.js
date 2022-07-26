import { makeStyles } from "@mui/styles"

const useGlobalStyles = makeStyles(() => ({
  "@global": {
    body: {
      margin: 0,
    },
  },
}))

export default useGlobalStyles
