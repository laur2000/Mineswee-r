import { Button, Col, Row } from "antd";
import { CSSProperties, PropsWithChildren, useEffect } from "react";
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
  const { field, onTileClick, onTileFlagged } = props;

  useEffect(() => {
    const handleTileFlagged = (e: MouseEvent) => {
      e.preventDefault();
      // @ts-ignore
      const buttonId: string = e.target.id;
      const buttonIndex = buttonId && buttonId.match(/tile-button-(\d+)-(\d+)/);

      if (buttonIndex) {
        const i = Number(buttonIndex[1]);
        const j = Number(buttonIndex[2]);
        onTileFlagged(field[i][j]);
      }
    };
    document.addEventListener("contextmenu", handleTileFlagged);

    return () => document.removeEventListener("contextmenu", handleTileFlagged);
  }, [field]);

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
        <Button
          id={"tile-button-" + tile.index.i + "-" + tile.index.j}
          style={buttonStyle}
          onClick={(e) => onTileClick(tile)}
        >
          {tile.isFlagged ? "F" : " "}
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
