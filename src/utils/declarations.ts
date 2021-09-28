import { RouteComponentProps } from "@reach/router";

export enum TileState {
  VISIBLE = "VISIBLE",
  HIDDEN = "HIDDEN",
}

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
  CUSTOM = "CUSTOM",
}

export interface Tile {
  hasBomb: boolean;
  isFlagged: boolean;
  state: TileState;
  neighbourBombs: number;
  index: Index;
}

export interface Route {
  path: string;
  Component: React.LazyExoticComponent<
    (props: RouteComponentProps) => JSX.Element
  >;
}

export interface Settings {
  difficulty: Difficulty;
  width: number;
  height: number;
  bombs: number;
}

export interface MineSweeperFieldRendererProps {
  field: Field;
  rerenderField: () => void;
}

export interface RenderTileProps {
  tile: Tile;
  onTileClick: (tile: Tile) => void;
  onTileFlagged: (tile: Tile) => void;
}

export interface MineSweeperScoreProps {
  field: Field;
  settings: Settings;
  onFinish: (time: number, settings: Settings) => void;
}

export type Field = Tile[][];

export interface Index {
  i: number;
  j: number;
}

export type SettingsByDifficulty = { [key in Difficulty]: Partial<Settings> };
