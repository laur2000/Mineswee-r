import AppRouter from "./Router";
import { SettingsProvider } from "../providers/SettingsProvider";

const App = () => {
  return (
    <SettingsProvider>
      <AppRouter />
    </SettingsProvider>
  );
};

export default App;
