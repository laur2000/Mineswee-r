import { Field, Index, Settings, Tile, TileState } from "./declarations";

export const generateBombField = (settings: Settings): Field => {
  const { width, height, bombs } = settings;

  const field = generateEmptyField(width, height);
  let generatedBombs = 0;

  while (generatedBombs < bombs) {
    const row = randomNumberInRange(0, height);
    const column = randomNumberInRange(0, width);
    const tile = field[row][column];
    if (!tile.hasBomb) {
      tile.hasBomb = true;
      generatedBombs++;
      addNeighboursBomb(field, row, column);
    }
  }
  return field;
};

export const handleTileReveal = (field: Field, tile: Tile) => {
  if (
    !tile.hasBomb &&
    tile.neighbourBombs === 0 &&
    tile.state !== TileState.VISIBLE
  ) {
    tile.state = TileState.VISIBLE;
    const indices = getAllDirectionIndices(
      tile.index,
      field.length,
      field[0].length
    );

    indices.forEach((index) =>
      handleTileReveal(field, field[index.i][index.j])
    );
  }
  tile.state = TileState.VISIBLE;
};

export const addNeighboursBomb = (
  field: Field,
  row: number,
  column: number
) => {
  const indices = getAllDirectionIndices(
    { i: row, j: column },
    field.length,
    field[0].length
  );

  indices.forEach((index) => {
    const { i, j } = index;
    const tile = field[i][j];
    if (!tile.hasBomb) {
      tile.neighbourBombs++;
    }
  });
};

export const getAllDirectionIndices = (
  index: Index,
  maxILength: number,
  maxJLength: number
) => {
  const { i, j } = index;
  const indices: Index[] = [
    { i: i - 1, j: j - 1 }, // Top-left
    { i: i - 1, j }, // Top
    { i: i - 1, j: j + 1 }, // Top-right
    { i, j: j - 1 }, // Left
    { i, j: j + 1 }, // Right
    { i: i + 1, j: j - 1 }, // Bottom-left
    { i: i + 1, j }, // Bottom
    { i: i + 1, j: j + 1 }, // Bottom-right
  ];

  return indices.filter((ind) => isIndexValid(ind, maxILength, maxJLength));
};

export const isIndexValid = (
  index: Index,
  maxILength: number,
  maxJLength: number
) => {
  const { i, j } = index;
  return i >= 0 && j >= 0 && i < maxILength && j < maxJLength;
};
export const generateEmptyField = (width: number, height: number): Field => {
  const field: Field = [];

  for (let row = 0; row < height; row++) {
    field[row] = [];
    for (let column = 0; column < width; column++) {
      field[row][column] = {
        state: TileState.HIDDEN,
        hasBomb: false,
        neighbourBombs: 0,
        index: { i: row, j: column },
      };
    }
  }

  return field;
};

export const useTitle = (title?: string) => {
  if (title) {
    document.title = title;
  }
  return document.title;
};

function randomNumberInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
