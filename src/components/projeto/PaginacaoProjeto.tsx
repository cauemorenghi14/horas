import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { TabelaTarefas } from "./tabela-tarefas-projeto/TabelaTarefas";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PaginacaoProjeto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
        >
          <Tab style={{ fontSize: "12px" }} label="Tarefas" {...a11yProps(0)} />
          <Tab
            style={{ fontSize: "12px" }}
            label="Dashboard"
            {...a11yProps(1)}
          />
          <Tab style={{ fontSize: "12px" }} label="Notas" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary expandIcon={<KeyboardArrowDown />}>
            <Typography>Em andamento</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TabelaTarefas />
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<KeyboardArrowDown />}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography>Concluídas</Typography>
          </AccordionSummary>
          <AccordionDetails>tarefa 1</AccordionDetails>
        </Accordion>
      </CustomTabPanel>
    </Box>
  );
}
