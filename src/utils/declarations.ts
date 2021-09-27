import { RouteComponentProps } from "@reach/router";

export enum TileState {
  VISIBLE = "VISIBLE",
  HIDDEN = "HIDDEN",
  FLAGGED = "FLAGGED",
}

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
  CUSTOM = "CUSTOM",
}

export interface Tile {
  hasBomb: boolean;
  state: TileState;
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
  settings: Settings;
  onTileClick: (tile: Tile) => void;
}

export interface RenderTileProps {
  tile: Tile;
  onTileClick: (tile: Tile) => void;
}

export type Field = Tile[][];

export type SettingsByDifficulty = { [key in Difficulty]: Partial<Settings> };
