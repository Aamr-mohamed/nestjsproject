import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F6CBD", // Use Tailwind blue-500 as an example
    },
    secondary: {
      main: "#f43f5e", // Use Tailwind rose-500 as an example
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, Arial, sans-serif", // Add Poppins first
    h1: {
      fontWeight: 500,
      fontSize: 20,
    },
    h2: {
      fontWeight: 400,
      fontSize: 16,
    },
    p: {
      fontWeight: 300,
      fontSize: 12,
    },
  },
});

export default theme;
