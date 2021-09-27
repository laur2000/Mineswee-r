import React, { createContext, useState } from "react";
import { Difficulty, Settings } from "../utils/declarations";

const SettingsContext: React.Context<
  [Settings, React.Dispatch<React.SetStateAction<Settings>>]
> = createContext([] as any);

export const SettingsProvider = (props: any) => {
  const state = useState<Settings>({
    difficulty: Difficulty.CUSTOM,
    width: 10,
    height: 10,
    bombs: 30,
  });

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
