import { Button, Col, Row } from "antd";
import { CSSProperties, PropsWithChildren } from "react";
import {
  MineSweeperFieldRendererProps,
  RenderTileProps,
  TileState,
} from "../../utils/declarations";
import Container from "../Container";

const buttonStyle: CSSProperties = {
  width: "32px",
  height: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const MineSweeperFieldRenderer = (
  props: PropsWithChildren<MineSweeperFieldRendererProps>
) => {
  const { field, onTileClick } = props;

  return (
    <Container>
      {field.map((row, i) => (
        <Row key={"field-row-" + i}>
          {row.map((tile, j) => (
            <RenderTile
              tile={tile}
              onTileClick={onTileClick}
              key={"field-tile-" + i + "-" + j}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
};

export const RenderTile = (props: RenderTileProps) => {
  const { tile, onTileClick } = props;

  if (tile.state === TileState.HIDDEN) {
    return (
      <Col>
        <Button style={buttonStyle} onClick={() => onTileClick(tile)}>
          {" "}
        </Button>
      </Col>
    );
  } else {
    return (
      <Col>
        <Button style={buttonStyle} disabled>
          {tile.hasBomb
            ? "X"
            : tile.neighbourBombs === 0
            ? " "
            : tile.neighbourBombs}
        </Button>
      </Col>
    );
  }
};

export default MineSweeperFieldRenderer;
