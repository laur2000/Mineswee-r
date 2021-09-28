import { CSSProperties, MouseEvent } from "react";
import { RenderTileProps } from "../../utils/declarations";
import { CloseCircleOutlined, FlagOutlined } from "@ant-design/icons";
import { Button, Col } from "antd";

const buttonStyle: CSSProperties = {
  width: "32px",
  height: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const TileRender = (props: RenderTileProps) => {
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

  const { isBomb, isFlagged, isVisible, neighbourBombs } = tile;
  const hasNeighbourBombs = neighbourBombs !== 0;

  const isBombTile = isVisible && isBomb;
  const isFlagTile = !isVisible && isFlagged;
  const isNumberTile = isVisible && !isBomb && !isFlagged && hasNeighbourBombs;

  let tileType: any;

  if (isBombTile) {
    tileType = <CloseCircleOutlined />;
  } else if (isFlagTile) {
    tileType = <FlagOutlined />;
  } else if (isNumberTile) {
    tileType = neighbourBombs;
  } else {
    tileType = " ";
  }
  return (
    <Col>
      <Button
        style={buttonStyle}
        onMouseDown={handleTileMouseDown}
        onContextMenu={(e) => e.preventDefault()}
        disabled={isVisible}
      >
        {tileType}
      </Button>
    </Col>
  );
};

export default TileRender;
