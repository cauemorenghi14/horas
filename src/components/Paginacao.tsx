import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { Projeto } from "./projeto/Projeto";
import { projetos } from "../data/projetos";

export default function Paginacao() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Em andamento" value="1" />
            <Tab label="A concluir" value="2" />
            <Tab label="Concluídos" value="3" />
          </TabList>
        </Box>
        <Box display="flex" width="100%" flexWrap="wrap">
          {projetos.map((projeto) => (
            <Projeto
              id={projeto.id}
              key={projeto.id}
              name={projeto.name}
              status={projeto.status}
            />
          ))}
        </Box>
      </TabContext>
    </Box>
  );
}
