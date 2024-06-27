import { TabPanel } from "@mui/lab";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

type TProjetoProps = {
    id: number
    name: string
    formacao?: number
    status: number
}

export const Projeto = ({ id, name, status }: TProjetoProps) => {

  const theme = useTheme();

  const navigate = useNavigate()

  return (
    <TabPanel onClick={() => navigate(`/projetos/${id}`)} sx={{ cursor: 'pointer', width: '20%', }} value={`${status}`}>
        <Box
        component="div"
        borderRadius={3}
        sx={{ backgroundColor: "#fff", width: '100%', }}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
        
        >
        <Box component="div" padding=".5em 1em">
            <Typography
            color={theme.palette.primary.main}
            fontWeight={600}
            sx={{ fontSize: "14px" }}
            >
            {name}
            </Typography>
        </Box>
        <Divider />
        <Box
            component="div"
            padding=".5em 1em"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Typography sx={{ fontSize: "13px" }}>
            <span style={{ fontWeight: 600, color: theme.palette.primary.main }}>
                2
            </span>{" "}
            tarefas para hoje
            </Typography>
        </Box>
        </Box>
    </TabPanel>
  );
};
