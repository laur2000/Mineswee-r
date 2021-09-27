import { Row, Space, Spin } from "antd";
import Container from "../Container";

const Loading = () => {
  return (
    <Row justify="center" align="middle">
      <Container>
        <Space>
          <Spin />
          Loading
        </Space>
      </Container>
    </Row>
  );
};

export default Loading;
