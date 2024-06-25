import {
    Avatar,
    Box,
    Divider,
    Drawer,
    List,
    Typography,
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
            width={theme.spacing(28)}
            height="100%"
            display="flex"
            flexDirection="column"
          >
            <Box
              width="100%"
              height={theme.spacing(20)}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              gap={1}
            >
              <Avatar
                sx={{ height: theme.spacing(12), width: theme.spacing(12), fontSize: '2em' }}
              />
              <Typography>username</Typography>
            </Box>
  
            <Divider />
  
            <Box
              flex={1}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <List component="nav">
                <ListItemLink
                  icon="home"
                  label="Página Inicial"
                  onClick={toggleDrawerOpen}
                  to="/"
                />
                <ListItemLink
                  icon="person"
                  label="Usuários"
                  onClick={toggleDrawerOpen}
                  to="/usuarios"
                />
              </List>
              <ToggleThemeButton />
            </Box>
          </Box>
        </Drawer>
  
        <Box
          marginLeft={smDown ? 0 : theme.spacing(28)}
        >
          <Outlet />
        </Box>
      </>
    );
  };
  