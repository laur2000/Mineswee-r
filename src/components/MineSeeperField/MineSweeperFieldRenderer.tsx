import { Button, Col, Row } from "antd";
import { CSSProperties, PropsWithChildren } from "react";
import {
  Field,
  MineSweeperFieldRendererProps,
  RenderTileProps,
  Tile,
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
  const {
    field,
    onTileClick,
    settings: { width, height },
  } = props;

  return (
    <Container>
      {Array(height)
        .fill(0)
        .map((_, i) => (
          <Row>
            {Array(width)
              .fill(0)
              .map(
                (_, j) =>
                  field[i] &&
                  field[i][j] && (
                    <RenderTile tile={field[i][j]} onTileClick={onTileClick} />
                  )
              )}
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
          {tile.hasBomb ? "X" : " "}
        </Button>
      </Col>
    );
  }
};

export default MineSweeperFieldRenderer;
