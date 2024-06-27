import {
    Table,
    TableContainer,
  } from "@mui/material";
  import { TabelaHead } from "./TabelaHead";
  import { TabelaBody } from "./TabelaBody";
  
  export const TabelaTarefas = () => {
    return (
      <TableContainer>
        <Table>
          <TabelaHead />
          <TabelaBody />
        </Table>
      </TableContainer>
    );
  };
  