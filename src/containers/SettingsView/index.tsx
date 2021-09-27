import Container from "../../components/Container";
import SettingsForm from "../../components/SettingsForm";
import { Space, Typography } from "antd";
import Return from "../../components/Return";

const { Title } = Typography;
const SettingsView = () => {
  return (
    <Container>
      <Space>
        <Return />
        <Title>Settings</Title>
      </Space>
      <Container>
        <SettingsForm />
      </Container>
    </Container>
  );
};

export default SettingsView;
