import React, { useContext } from "react";

import { Form, InputNumber, Select } from "antd";
import SettingsContext from "../providers/SettingsProvider";
import { useForm } from "antd/lib/form/Form";
import { Difficulty, SettingsByDifficulty } from "../utils/declarations";

const SetupForm = () => {
  const [settings, setSettings] = useContext(SettingsContext);
  const [form] = useForm();

  const handleDifficultyChange = (difficulty: Difficulty) => {
    form.setFieldsValue(settingsByDifficulty[difficulty]);
    form.submit();
  };

  const handleCustomChange = () => handleDifficultyChange(Difficulty.CUSTOM);

  return (
    <Form
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 2 }}
      onFinish={setSettings}
      initialValues={settings}
    >
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
    width: 10,
    height: 10,
    bombs: 20,
  },
  [Difficulty.MEDIUM]: {
    difficulty: Difficulty.MEDIUM,
    width: 20,
    height: 15,
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

export default SetupForm;
