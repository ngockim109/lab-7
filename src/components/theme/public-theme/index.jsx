import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import Layout from "../../layout/user-layout";
import { CssBaseline } from "@mui/material";
import {
  amber,
  blue,
  deepOrange,
  grey,
  lightBlue,
  red,
} from "@mui/material/colors";
import PublicLayout from "../../layout/public-layout";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MainContainer({ children }) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {children}
    </Box>
  );
}
MainContainer.propTypes = {
  children: PropTypes.node,
};

export default function PublicTheme() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: red,
                divider: red[200],
                text: {
                  primary: grey[900],
                  secondary: grey[600],
                  highlight: red[600],
                  info: lightBlue[500],
                  error: red[500],
                  secondaryInfo: lightBlue[200],
                  darkRedMode: grey[200],
                  white: grey[200],
                  grey: grey[600],
                  redLight: grey[200],
                },
                info: {
                  main: blue[700],
                },
                error: {
                  light: red[400],
                  main: red[600],
                },
                lightInfo: {
                  main: lightBlue[400],
                },
                darkInfo: {
                  main: blue[800],
                },
                white: {
                  main: grey[200],
                },
                grey: {
                  main: grey[200],
                  dark: grey[400],
                },
                darkRedMode: {
                  main: grey[200],
                },
                dark: {
                  main: grey[900],
                },
                light: {
                  main: grey[300],
                },
                redLight: {
                  main: red[800],
                },
                deep: {
                  main: grey[200],
                },
                bgSecondary: {
                  main: "#FEEEDE",
                },
              }
            : {
                // palette values for dark mode
                primary: grey,
                divider: grey[200],
                background: {
                  default: grey[900],
                  paper: grey[900],
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                  highlight: red[900],
                  info: lightBlue[500],
                  error: red[500],
                  secondaryInfo: lightBlue[200],
                  darkRedMode: red[900],
                  white: grey[200],
                  grey: grey[700],
                  redLight: red[700],
                },
                info: {
                  main: blue[700],
                },
                error: {
                  light: red[300],
                  main: red[400],
                },
                lightInfo: {
                  main: lightBlue[400],
                },
                darkInfo: {
                  main: blue[800],
                },
                white: {
                  main: grey[200],
                },
                grey: {
                  main: grey[200],
                  dark: grey[400],
                },
                darkRedMode: {
                  main: red[900],
                },
                dark: {
                  main: "#353535",
                },
                light: {
                  main: grey[900],
                },
                redLight: {
                  main: "#FFFFFF",
                },
                deep: {
                  main: grey[900],
                },
                bgSecondary: {
                  main: "#12222D",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainContainer>
          <PublicLayout
            theme={theme.palette.mode}
            changeTheme={colorMode.toggleColorMode}
          ></PublicLayout>
        </MainContainer>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

PublicTheme.propTypes = {
  children: PropTypes.node,
};
