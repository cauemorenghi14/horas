import { Box, Typography, useTheme } from "@mui/material";

export const Home = () => {
  
  const theme = useTheme()

  return (
    <Box minHeight="100vh">
      <Typography color={theme.palette.primary.contrastText}>Página de Home</Typography>
    </Box>
  );
};
