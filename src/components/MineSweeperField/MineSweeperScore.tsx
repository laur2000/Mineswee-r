import { Col, Row } from "antd";
import { useEffect } from "react";
import { MineSweeperScoreProps } from "../../utils/declarations";
import { calculateRemainingBombs } from "../../utils/fn";
import Container from "../Container";

const MineSweeperScore = (props: MineSweeperScoreProps) => {
  const { field, settings, onFinish } = props;

  const { tilesWithBombFlagged, tilesWithoutBombFlagged } =
    calculateRemainingBombs(field);

  useEffect(() => {
    if (tilesWithBombFlagged === settings.bombs) {
      onFinish(0, settings);
    }
  }, [settings.bombs, tilesWithBombFlagged]);

  const bombsLeft =
    settings.bombs - (tilesWithBombFlagged + tilesWithoutBombFlagged);
  return (
    <Container bodyStyle={{ width: "100%" }}>
      <Row justify="space-around">
        <Col>Bombs left: {bombsLeft} </Col>
        <Col>S</Col>
        <Col>D</Col>
      </Row>
    </Container>
  );
};

export default MineSweeperScore;
