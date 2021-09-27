import { PropsWithChildren, useEffect, useState } from "react";
import "./MineSweeperField.css";
import { generateBombField } from "../utils/fn";
import { Tile, Settings } from "../utils/declarations";

const MineSweeperField = (props: PropsWithChildren<Settings>) => {
  const { width, height, bombs, difficulty } = props;
  const [field, setField] = useState<Array<Tile[]>>([[]]);

  useEffect(() => {
    const settings = { width, height, bombs, difficulty };
    const newField = generateBombField(settings);

    setField(newField);
  }, [width, height, bombs, difficulty]);

  return (
    <table>
      <tbody>
        {Array(height)
          .fill(0)
          .map((_, i) => (
            <tr>
              {Array(width)
                .fill(0)
                .map((_, j) => {
                  if (field[i] && field[i][j]) {
                    if (field[i][j].hasBomb) {
                      return <td>{"X"}</td>;
                    } else {
                      return <td> </td>;
                    }
                  }
                  return "";
                })}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default MineSweeperField;
