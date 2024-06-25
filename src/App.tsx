import { Outlet } from "react-router-dom";
import { AppThemeProvider } from "./contexts/ThemeContext";
import { DrawerProvider } from "./contexts/DrawerContext";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <Outlet />
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
