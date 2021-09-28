import { Button, Col, Row } from "antd";
import { CSSProperties, PropsWithChildren, MouseEvent } from "react";
import {
  MineSweeperFieldRendererProps,
  RenderTileProps,
  Tile,
  TileState,
} from "../../utils/declarations";
import Container from "../Container";
import { FlagOutlined } from "@ant-design/icons";
import { handleTileReveal } from "../../utils/fn";

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
  const { field, rerenderField } = props;

  const handleTileClick = (tile: Tile) => {
    handleTileReveal(field, tile);
    rerenderField();
  };

  const handleTileFlagged = (tile: Tile) => {
    tile.isFlagged = !tile.isFlagged;
    rerenderField();
  };
  return (
    <Container>
      {field.map((row, i) => (
        <Row key={"field-row-" + i}>
          {row.map((tile, j) => (
            <RenderTile
              tile={tile}
              onTileClick={handleTileClick}
              onTileFlagged={handleTileFlagged}
              key={"field-tile-" + i + "-" + j}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
};

export const RenderTile = (props: RenderTileProps) => {
  const { tile, onTileClick, onTileFlagged } = props;

  const handleTileMouseDown = (e: MouseEvent) => {
    e.preventDefault();

    const isLeftClick = e.button === 0;
    const isRightClick = e.button === 2;

    if (isLeftClick) {
      onTileClick(tile);
    }
    if (isRightClick) {
      onTileFlagged(tile);
    }
  };

  if (tile.state === TileState.HIDDEN) {
    return (
      <Col>
        <Button
          style={buttonStyle}
          onMouseDown={handleTileMouseDown}
          onContextMenu={(e) => e.preventDefault()}
        >
          {tile.isFlagged ? <FlagOutlined /> : " "}
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
