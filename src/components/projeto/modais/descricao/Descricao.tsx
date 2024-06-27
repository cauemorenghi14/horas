import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { AccessAlarm, Delete, Description, Today } from "@mui/icons-material";
import { Divider, IconButton, Tooltip, Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts";
import { FormDescricao } from "./FormDescricao";

type Anchor = "top" | "left" | "bottom" | "right";

export default function Descricao() {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        console.log('teste1')
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
    >
      <Box padding={2}>
        <Typography variant="subtitle1" fontWeight={600}>
          Revisão ativa de termodinâmica + exercícios
        </Typography>

        <Divider />

        <Box
          display="flex"
          alignItems="center"
          padding="1em 0"
          justifyContent="center"
          gap={2}
        >
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            textAlign="center"
          >
            <AccessAlarm fontSize="small" />
            <Typography variant="body2">Decorrido: 32h50min</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            textAlign="center"
          >
            <Today fontSize="small" />
            <Typography variant="body2">Estimado: 50h</Typography>
          </Box>
        </Box>

        <Divider />

        <Box display="flex" alignItems="center" justifyContent="center">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Gauge
              width={100}
              height={100}
              value={80}
              startAngle={-90}
              endAngle={90}
            />
            <Typography>Conclusão</Typography>
          </Box>
        </Box>

        <Divider />
      </Box>

      <Box padding={2}>
        <FormDescricao />
        <Divider />
      </Box>

      <Box padding={2}>
        <Tooltip title="Deletar tarefa">
          <IconButton>
            <Delete sx={{ color: "#b10202" }}/>
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
            <Tooltip title="Ver Descrição" onClick={toggleDrawer(anchor, true)}>
              <IconButton>
                <Description style={{ color: "#505050" }} />
              </IconButton>
            </Tooltip>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
