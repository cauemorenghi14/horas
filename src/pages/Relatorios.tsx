import { Box, Typography, useTheme } from "@mui/material";

export const Relatorios = () => {

  const theme = useTheme()

  return (
    <Box minHeight="100vh">
      <Typography color={theme.palette.primary.contrastText}>Relatórios</Typography>
    </Box>
  );
};
