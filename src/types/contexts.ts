export type IAppDrawerContextProps = {
  children: React.ReactNode;
};

export type IDrawerContextProps = {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
};

export type IThemeContextProps = {
  themeName: "light" | "dark";
  toggleTheme: () => void;
};

export type IAppThemeProvider = {
  children: React.ReactNode;
};
