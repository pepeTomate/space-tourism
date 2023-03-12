/* eslint-disable no-unused-vars */
import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    main: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    main?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    main: true;
  }
}
declare module "@mui/material/Button" {
  interface TextFieldPropsColorOverrides {
    main: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    gray: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    gray?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    gray: true;
  }
}
declare module "@mui/material/Button" {
  interface TextFieldPropsColorOverrides {
    gray: true;
  }
}
declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    dark?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    dark: true;
  }
}
// Update the Button's color prop options
declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    dark: true;
  }
}
export const theme = createTheme({
  typography: {
    fontFamily:
      "Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    htmlFontSize: 10,

    fontSize: 14,
    h1: {
      fontSize: "4rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "3.4rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "2.4rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.2,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "1.4rem",
      fontWeight: 300,
      lineHeight: 1,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 766,
      lg: 990,
      xl: 1200,
    },
  },
  palette: {
    mode: "dark"
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: "10px",
          fontWeight: 700,
          fontSize: "1 rem",
          padding: "10px 15px",
          minWidth: "0px",
        },
      },
    },
  },
});
