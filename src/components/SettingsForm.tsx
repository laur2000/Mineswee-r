import React, { useContext } from "react";

import { Form, InputNumber, Select } from "antd";
import SettingsContext from "../providers/SettingsProvider";
import { useForm } from "antd/lib/form/Form";
import { Difficulty, SettingsByDifficulty } from "../utils/declarations";

const SettingsForm = () => {
  const [settings, setSettings] = useContext(SettingsContext);
  const [form] = useForm();

  const handleDifficultyChange = (difficulty: Difficulty) => {
    form.setFieldsValue(settingsByDifficulty[difficulty]);
    form.submit();
  };

  const handleCustomChange = () => handleDifficultyChange(Difficulty.CUSTOM);

  return (
    <Form form={form} onFinish={setSettings} initialValues={settings}>
      <Form.Item label="Difficulty" name="difficulty">
        <Select onChange={handleDifficultyChange}>
          {Object.entries(Difficulty).map(([label, value]) => (
            <Select.Option key={value} value={value}>
              {label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Width" name="width">
        <InputNumber onChange={handleCustomChange} />
      </Form.Item>

      <Form.Item label="Height" name="height">
        <InputNumber onChange={handleCustomChange} />
      </Form.Item>

      <Form.Item label="Bombs" name="bombs">
        <InputNumber onChange={handleCustomChange} />
      </Form.Item>
    </Form>
  );
};

const settingsByDifficulty: SettingsByDifficulty = {
  [Difficulty.EASY]: {
    difficulty: Difficulty.EASY,
    width: 5,
    height: 5,
    bombs: 10,
  },
  [Difficulty.MEDIUM]: {
    difficulty: Difficulty.MEDIUM,
    width: 10,
    height: 10,
    bombs: 40,
  },
  [Difficulty.HARD]: {
    difficulty: Difficulty.HARD,
    width: 37,
    height: 17,
    bombs: 99,
  },
  [Difficulty.CUSTOM]: { difficulty: Difficulty.CUSTOM },
};

export default SettingsForm;
