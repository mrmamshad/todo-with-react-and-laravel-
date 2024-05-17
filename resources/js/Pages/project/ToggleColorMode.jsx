import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp({ onModeChange }) {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    React.useEffect(() => {
        onModeChange(theme.palette.mode);
    }, [theme.palette.mode, onModeChange]);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                color: "text.primary",
                borderRadius: 1,
                p: 3,
            }}
        >
            <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
            >
                {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                ) : (
                    <Brightness4Icon />
                )}
            </IconButton>
        </Box>
    );
}

export default function ToggleColorMode({ onModeChange }) {
    const [mode, setMode] = React.useState("light");
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    React.useEffect(() => {
        onModeChange(mode);
    }, [mode, onModeChange]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <MyApp onModeChange={onModeChange} />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
