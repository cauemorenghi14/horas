import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AccessAlarm, Checklist, KeyboardArrowDown } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Tooltip,
} from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Logs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
    <div>
      <Tooltip onClick={handleOpen} title="Ver Logs">
        <IconButton>
          <AccessAlarm style={{ color: "#505050" }} />
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" alignItems="center" gap={1}>
            <Checklist />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Logs de trabalho
            </Typography>
          </Box>
          <Box>
            <Accordion sx={{ backgroundColor: theme }}>
              <AccordionSummary expandIcon={<KeyboardArrowDown />}>log1</AccordionSummary>
              <AccordionDetails>details log1</AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<KeyboardArrowDown />}>log1</AccordionSummary>
              <AccordionDetails>details log1</AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
