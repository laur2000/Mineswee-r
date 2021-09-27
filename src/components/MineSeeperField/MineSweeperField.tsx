import { PropsWithChildren, useEffect, useState } from "react";
import "./MineSweeperField.css";
import { generateBombField, handleTileReveal } from "../../utils/fn";
import { Tile, Settings, TileState } from "../../utils/declarations";

import MineSweeperFieldRenderer from "./MineSweeperFieldRenderer";

const MineSweeperField = (props: PropsWithChildren<Settings>) => {
  const { width, height, bombs, difficulty } = props;
  const [field, setField] = useState<Array<Tile[]>>([[]]);

  useEffect(() => {
    const settings = { width, height, bombs, difficulty };
    const newField = generateBombField(settings);

    setField(newField);
  }, [width, height, bombs, difficulty]);

  return (
    <MineSweeperFieldRenderer
      field={field}
      onTileClick={(tile) => {
        handleTileReveal(field, tile);
        setField([...field]);
        console.log(field);
      }}
    />
  );
};

export default MineSweeperField;
