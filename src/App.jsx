import "./App.css";
import AppHeader from "./layouts/AppHeader/AppHeader";
import Home from "./sections/Home/Home";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppHeader />
      <Home />
    </MantineProvider>
  );
}

export default App;
