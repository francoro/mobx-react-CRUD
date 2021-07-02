import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "200px",
    '& .MuiFormControl-root': {
        marginBottom: '25px',
    }
  },
}));
