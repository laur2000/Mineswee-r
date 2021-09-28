import { useContext } from "react";
import Container from "../../components/Container";
import MineSweeperField from "../../components/MineSweeperField/MineSweeperField";
import SettingsContext from "../../providers/SettingsProvider";
import { Space, Typography } from "antd";
import { useTitle } from "../../utils/fn";
import Return from "../../components/Return";

const { Title } = Typography;

const Game = () => {
  useTitle("Game");
  const [settings] = useContext(SettingsContext);
  return (
    <Container>
      <Space>
        <Return />
        <Title>Game</Title>
      </Space>
      <MineSweeperField {...settings} />
    </Container>
  );
};

export default Game;
