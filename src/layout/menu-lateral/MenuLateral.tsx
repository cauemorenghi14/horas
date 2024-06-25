import {
    Box,
    Divider,
    Drawer,
    List,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import { useDrawerContext } from "../../contexts";
  import { Outlet } from "react-router-dom";
  import { ListItemLink } from "./ListItemLink";
  import { ToggleThemeButton } from "./ToggleThemeButton";
  
  export const MenuLateral = () => {
    const theme = useTheme();
  
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  
    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
  
    return (
      <>
        <Drawer
          onClose={toggleDrawerOpen}
          open={isDrawerOpen}
          variant={smDown ? "temporary" : "permanent"}
          anchor="left"
        >
          <Box
            width={theme.spacing(15)}
            height="100%"
            display="flex"
            flexDirection="column"
          >
            <Divider />
  
            <Box
              flex={1}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <List component="nav">
                <ListItemLink
                  icon="work"
                  label="Projetos"
                  onClick={toggleDrawerOpen}
                  to="/"
                />
                <ListItemLink
                  icon="dashboard"
                  label="Relatórios"
                  onClick={toggleDrawerOpen}
                  to="/relatorios"
                />
              </List>
              <ToggleThemeButton />
            </Box>
          </Box>
        </Drawer>
  
        <Box
          marginLeft={smDown ? 0 : theme.spacing(15)}
        >
          <Outlet />
        </Box>
      </>
    );
  };
  