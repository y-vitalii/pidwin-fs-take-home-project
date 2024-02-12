import { theme } from "../../themes/Default";

export const styles = {
    chip: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText,
        height: "70px",
        width: "max-content",
        borderRadius: "40px",
    },

    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "15px",
        padding: theme.spacing(2),
    },

    container: {
        display: "flex",
        alignItems: "center",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        padding: "10px 0"
    },

    coinBox: {
        display: "inline-flex",
        alignItems: "center",
        margin: "0 10px"
    },

    coin: {
        marginRight: "5px"
    },

    coinBonus: {
        marginRight: "10px",
        boxShadow: "rgb(252 205 26 / 94%) 0px 0px 15px 4px",
        borderRadius: "50%"
    }
}
