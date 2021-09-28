import { Row } from "antd";
import { PropsWithChildren } from "react";
import { MineSweeperFieldRendererProps, Tile } from "../../utils/declarations";
import Container from "../Container";
import { handleTileReveal } from "../../utils/fn";
import TileRender from "../TileRender";

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
            <TileRender
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

export default MineSweeperFieldRenderer;
