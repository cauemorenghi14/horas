import { Box, Typography, useTheme } from "@mui/material";

export const Projetos = () => {
  
  const theme = useTheme()

  return (
    <Box minHeight="100vh">
      <Typography color={theme.palette.primary.contrastText}>Projetos</Typography>
    </Box>
  );
};