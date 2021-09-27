import { Field, Settings, TileState } from "./declarations";

export const generateBombField = (settings: Settings): Field => {
  const { width, height, bombs } = settings;

  const field = generateEmptyField(width, height);
  let generatedBombs = 0;

  while (generatedBombs < bombs) {
    const row = randomNumberInRange(0, height);
    const column = randomNumberInRange(0, width);
    if (!field[row][column].hasBomb) {
      field[row][column].hasBomb = true;
      generatedBombs++;
    }
  }
  return field;
};

export const generateEmptyField = (width: number, height: number): Field => {
  const field: Field = [];

  for (let row = 0; row < height; row++) {
    field[row] = [];
    for (let column = 0; column < width; column++) {
      field[row][column] = { state: TileState.HIDDEN, hasBomb: false };
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
