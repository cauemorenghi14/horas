import { Box, Typography, useTheme } from "@mui/material";
import Paginacao from "../components/Paginacao";

export const Projetos = () => {
  const theme = useTheme();

  return (
    <Box minHeight="100vh" padding={3}>
      <Typography
        marginBottom={1}
        variant="h5"
        fontWeight={600}
        color={theme.palette.primary.contrastText}
      >
        Projetos
      </Typography>

      <Box
        sx={{ width: "100%", display: "flex", gap: 3 }} marginTop={2}
      >

        <Paginacao />
      </Box>
    </Box>
  );
};
