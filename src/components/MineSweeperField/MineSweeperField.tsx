import { PropsWithChildren, useEffect, useState } from "react";
import "./MineSweeperField.css";
import { generateBombField, handleTileReveal } from "../../utils/fn";
import { Settings, Field, TileState } from "../../utils/declarations";

import MineSweeperFieldRenderer from "./MineSweeperFieldRenderer";
import MineSweeperScore from "./MineSweeperScore";

const MineSweeperField = (props: PropsWithChildren<Settings>) => {
  const { width, height, bombs, difficulty } = props;
  const [field, setField] = useState<Field>([]);

  const rerenderField = () => setField([...field]);

  useEffect(() => {
    const settings = { width, height, bombs, difficulty };
    const newField = generateBombField(settings);

    setField(newField);
  }, [width, height, bombs, difficulty]);

  return (
    <div>
      <MineSweeperScore field={field} settings={props} onFinish={console.log} />
      <MineSweeperFieldRenderer field={field} rerenderField={rerenderField} />
    </div>
  );
};

export default MineSweeperField;
