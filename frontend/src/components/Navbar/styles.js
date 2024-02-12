import { theme } from "../../themes/Default";

import { deepPurple } from "@mui/material/colors";

export const styles = {
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "1000px",
  },
  profile: {
    display: "flex",
    justifyContent: "flex-end",
    width: "600px",
  },
  userName: {
    lineHeight: "1",
    margin: "0 10px"
  },
  button: {
    marginLeft: "15px"
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
};
