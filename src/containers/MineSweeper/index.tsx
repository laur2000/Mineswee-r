import { useContext } from "react";
import MineSweeperField from "../../components/MineSweeperField";
import SettingsForm from "../../components/SettingsForm";
import SettingsContext from "../../providers/SettingsProvider";

const GameWrapper = () => {
  const [settings] = useContext(SettingsContext);
  return (
    <div>
      Pagina del game
      <div>Difficulty: {settings.difficulty}</div>
      <div>Width: {settings.width}</div>
      <div>Height: {settings.height}</div>
      <div>Bombs: {settings.bombs}</div>
      <hr />
      <MineSweeperField {...settings} />
      <SettingsForm />
    </div>
  );
};

export default GameWrapper;
